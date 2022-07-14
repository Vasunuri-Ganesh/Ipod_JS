import React from "react";

class Albums extends React.Component {
  render() {
    return (
      <div className="albums-screen">
        <h1 style={{ textAlign: "center" }}>Albums</h1>
        <div>
          <img
            className="image-container"
            src="https://images7.alphacoders.com/435/435568.jpg"
            alt="albums-icon"
          />
        </div>
      </div>
    );
  }
}

export default Albums;
