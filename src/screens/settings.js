import React from "react";

class Setting extends React.Component {
  render() {
    return (
      <div className="screen-setting">
        <h1 style={{ textAlign: "center" }}>Settings</h1>
        <div>
          <img
            className="image-container"
            src="http://cdn.wallpapersafari.com/82/52/7Se5bx.jpg"
            alt="settings-icon"
          />
        </div>
      </div>
    );
  }
}

export default Setting;
