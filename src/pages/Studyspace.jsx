import Whiteboard from "../components/Whiteboard";
import Spotify from "../components/Spotify";
import Chatbot from "../components/Chatbot";
import FileRender from "../components/FileRender";
import Timer from "../components/Timer";

const Studyspace = () => {
  return (
    <div>
      <Timer />
      <Spotify />
      <FileRender />
      <Whiteboard />
      <Chatbot />
    </div>
  );
};

export default Studyspace;
