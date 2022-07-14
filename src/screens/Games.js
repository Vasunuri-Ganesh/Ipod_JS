import React from "react";

class Game extends React.Component {
  render() {
    return (
      <div className="screen-game">
        <h1 style={{ textAlign: "center" }}>Games</h1>
        <div>
          <img
            className="image-container"
            src="https://wpuploads.appadvice.com/wp-content/uploads/2015/05/PAC-MAN_Icon.jpg"
            alt="games"
          />
        </div>
      </div>
    );
  }
}

export default Game;
