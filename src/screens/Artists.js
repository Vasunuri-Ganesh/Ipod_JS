import React from "react";

class Artists extends React.Component {
  render() {
    return (
      <div className="artists-screen">
        <h1 style={{ textAlign: "center" }}>Artists</h1>
        <div>
          <img
            className="image-container"
            src="https://3.bp.blogspot.com/-ih-yGMgDDec/UX1b7gqmmTI/AAAAAAABgG0/wxLpmdi8LaI/s1600/devi_sri_prasad_latest_photos_stills_1.jpg"
            alt="artists"
          />
        </div>
      </div>
    );
  }
}

export default Artists;
