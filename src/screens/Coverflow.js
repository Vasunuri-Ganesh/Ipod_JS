import React from "react";

class Coverflow extends React.Component {
  render() {
    return (
      <div className="screen-coverflow">
        <h1 style={{ textAlign: "center" }}>Cover Flow</h1>
        <div>
          <img
            className="image-container"
            src="https://i.ytimg.com/vi/ss4iW633cUs/maxresdefault.jpg"
            alt="games"
          />
        </div>
      </div>
    );
  }
}

export default Coverflow;
