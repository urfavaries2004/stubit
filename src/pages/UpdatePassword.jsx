import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "./styles.css";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const [inpval, setInpval] = useState({
    changepassword: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/updatepassword");
    }
  }, [user, navigate]);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    setError(""); // Reset error messages

    const { changepassword, confirmpassword } = inpval;
    const getuserArr = localStorage.getItem("userDatabase");

    if (changepassword === "") {
      setError("Password field is required");
    } else if (changepassword.length < 5) {
      setError("Password length should be greater than five");
    } else if (confirmpassword === "") {
      setError("Password field is required");
    } else if (confirmpassword.length < 5) {
      setError("Password length should be greater than five");
    } else if (confirmpassword !== changepassword) {
      setError("Passwords do not match");
    } else {
      if (getuserArr) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el) => el.id === user.id);

        if (userlogin.length === 0) {
          setError("User not found");
        } else {
          const updatedUserData = userdata.map((el) => {
            if (el.id === user.id) {
              return { ...el, password: changepassword };
            }
            return el;
          });

          localStorage.setItem("userDatabase", JSON.stringify(updatedUserData));
          console.log("Password changed successfully");
          updateUser({ password: changepassword }); // Update user context
          navigate("/profile"); // Goes to Logged In Home page if it is True
        }
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Password Update</h2>
      <form>
        <input
          type="password"
          name="changepassword"
          value={inpval.changepassword}
          onChange={getdata}
          placeholder="Change Password"
        />
        <input
          type="password"
          name="confirmpassword"
          value={inpval.confirmpassword}
          onChange={getdata}
          placeholder="Confirm Password"
        />
        <button type="submit" onClick={addData}>
          Update Password
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UpdatePassword;
