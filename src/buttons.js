import React from "react";
import "./styles.css";
import Zingtouch from "zingtouch";

const Buttons = (props) => {
  return (
    <div className="nav-section">
      <div className="buttons-container">
        <button className="center-circle" onClick={props.selectButtonClicked}>
          <h2>Select</h2>
        </button>

        <button className="menu-button" onClick={props.menuButtonClicked}>
          <img
            src="https://t4.ftcdn.net/jpg/03/05/87/61/240_F_305876177_4EzB8UJafxNruTRjfLgc57mb07Qn1cNv.jpg"
            alt="menu-icon"
          />
        </button>
        <button className="left-button" onClick={props.leftButtonClicked}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/853/853997.png"
            alt="left-button-icon"
          />
        </button>
        <button className="right-button">
          <img
            src="https://cdn-icons-png.flaticon.com/128/854/854184.png"
            alt="right-button-icon"
          />
        </button>
        <button className="play-pause">
          <img
            src="https://t4.ftcdn.net/jpg/04/48/50/67/240_F_448506731_XL0aZii6xlVIl5BnZE0jJe3YZtVLmyeA.jpg"
            alt="play-pause-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
