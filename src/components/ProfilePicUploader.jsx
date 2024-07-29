import { useRef, useState, useEffect } from "react";
import ProfilePic from "../assets/user.png";

const ProfilePicUploader = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const imgURL = URL.createObjectURL(blob);
            localStorage.setItem("profileImage", imgURL);
            setImage(imgURL);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleReset = () => {
    localStorage.removeItem("profileImage");
    setImage(null);
  };

  return (
    <div>
      <div className="image-upload-container">
        <div
          className="image-upload"
          onClick={handleReset}
          style={{ cursor: "pointer" }}
        >
          {image ? (
            <img src={image} alt="upload image" className="img-display-after" />
          ) : (
            <img
              src={ProfilePic}
              alt="upload image"
              className="img-display-before"
            />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div>
        <button
          className="image-edit-button"
          onClick={handleClick}
          style={{
            position: "sticky",
            top: "-10%",
            padding: "5px",
            backgroundColor: "#a0c1ff",
            border: "1px solid #ccc",
          }}
        >
          Edit
        </button>
      </div>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </div>
  );
};

export default ProfilePicUploader;
