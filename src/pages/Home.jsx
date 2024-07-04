import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="left">
            <div>
              <h1>Welcome to Stubit</h1>
            </div>
            <div>
              <h2>Transform Your Study Experience</h2>
            </div>
            <div>
              <p>
                Welcome to StuBit, the study app designed to revolutionize the
                way you learn. With a focus on creating the perfect environment
                for productivity, StuBit combines cutting-edge technology and
                personalized features to make studying more efficient and
                enjoyable.
              </p>
            </div>
            <div>
              <p>
                Join the StuBit community today and take the first step towards
                a smarter, more efficient study experience. Download the app now
                and see the difference for yourself!
              </p>
            </div>
            <div>
              <form>
                <button type="submit">
                  <Link to="/login">Let's go</Link>
                </button>
              </form>
            </div>
          </div>
          <div className="right">
            <img src="./assets/work.png" alt="study" />
          </div>
        </div>
        <hr style={{ width: "95%", border: "1px solid #FAF0E6" }} />
        <div className="container">
          <div>
            <h1>Why use Stubit?</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
