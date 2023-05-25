import React from "react";
import ReactDOM from "react-dom";
import bgmusic from "../Assets/bgmusic.mp3";
import "./styles.css";

const Sound = () => {
  const audio = new Audio(bgmusic);
  audio.loop = true;

  return (
    <div>
      <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.loop = false)}>Pause</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
