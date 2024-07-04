import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
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

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      alert("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("please enter valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      alert("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfully");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Log In</h2>
      <form>
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
          placeholder="Password"
        />
        <button type="submit" onClick={addData}>
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up here</Link>
      </p>
    </div>
  );
};

export default Login;
