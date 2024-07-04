import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import StudySpace from "./pages/StudySpace";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studyspace" element={<StudySpace />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

