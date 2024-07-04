import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = inpval;

    if (name === "") {
      alert("name field is required", {
        position: "top-center",
      });
    } else if (email === "") {
      alert("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("please enter valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      alert("password length should be greater than five", {
        position: "top-center",
      });
    } else if (confirm_password === "") {
      alert("confirm password field is required", {
        position: "top-center",
      });
    } else if (confirm_password.length < 5) {
      alert("confirm password length should be greater than five", {
        position: "top-center",
      });
    } else if (confirm_password !== password) {
      alert("confirm password doesnt match password", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="form-container">
      <h2>Welcome, Your Journey Begins Here!</h2>
      <p>Let's Sign Up!</p>
      <form>
        <input
          type="text"
          name="name"
          onChange={getdata}
          placeholder="Enter username"
        />
        <input
          type="email"
          name="email"
          onChange={getdata}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          onChange={getdata}
          placeholder="Enter password"
        />
        <input
          type="password"
          name="confirm_password"
          onChange={getdata}
          placeholder="Confirm password"
        />
        <button type="submit" onClick={addData}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
