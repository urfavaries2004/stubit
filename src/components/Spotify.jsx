import "./Spotify.css";
import SpotifyImage from "../assets/icons8-spotify.svg";
import { useState } from "react";
const Spotify = () => {
  const [visible, setVisible] = useState(false);
  if (visible) {
    return (
      <div className="btn-container">
        <div className="btn-box btn-small-box">
          <button className="pulse-button" onClick={() => setVisible(false)}>
            <img className="spotify-button" src={SpotifyImage} alt="Spotify" />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <div className="btn-box btn-small-box">
          <button
            className={`pulse-button ${visible ? "active" : ""}`}
            onClick={() => setVisible(true)}
          >
            <img src={SpotifyImage} alt="Spotify" />
          </button>
        </div>
        <div className="btn-box btn-large-box">
          <iframe
            className="spotify-iframe"
            src="https://open.spotify.com/embed/playlist/4WbH8sx95SZO4IR2SmXqOS?utm_source=generator"
            width="500px"
            height="80px"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
};

export default Spotify;
