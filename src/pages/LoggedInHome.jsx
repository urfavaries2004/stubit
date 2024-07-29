import { Link } from "react-router-dom";
import "./Home.css";
import { useAuth } from "../components/AuthContext";
import Card from "../components/Card";
import Study from "../assets/homepic.png";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="left">
            <h1> Hello, {user.name}</h1>
            <h2>Transform Your Study Experience</h2>
            <p>
              Welcome to StuBit, the study app designed to revolutionize the way
              you learn. With a focus on creating the perfect environment for
              productivity, StuBit combines cutting-edge technology and
              personalized features to make studying more efficient and
              enjoyable.
            </p>
            <p>
              Join the StuBit community today and take the first step towards a
              smarter, more efficient study experience. Download the app now and
              see the difference for yourself!
            </p>
            <Link to="/profile">
              <button type="submit" className="cta-button">
                Update Your Profile
              </button>
            </Link>
          </div>
          <div className="right">
            <img
              src={Study}
              alt="Study environment"
              className="homeimage"
              style={{ height: "380px", width: "380px" }}
            />
          </div>
        </div>
        <hr className="divider" /> {/* Add a divider */}
        <div className="cards-container">
          <Card
            title="Optimal Studying Environment"
            description="StuBit is designed to provide a distraction-free, efficient study environment, allowing you to focus solely on your learning."
          />
          <Card
            title="Smart Tools"
            description="Leverage advanced tools that streamline your study sessions. From organizing your notes to setting reminders for important deadlines, our smart tools ensure you stay on top of your academic game."
          />
          <Card
            title="AI Helper"
            description="Get instant help and guidance with our built-in AI tutor. Whether you're stuck on a tricky problem or need explanations for complex concepts, our AI is here to assist you 24/7."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
