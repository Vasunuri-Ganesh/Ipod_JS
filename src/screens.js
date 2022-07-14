import React from "react";
import Menu from "./screens/menu.js";
import Game from "./screens/Games.js";
import Setting from "./screens/settings.js";
import Coverflow from "./screens/Coverflow.js";
/* music */
import AllSongs from "./screens/AllSongs.js";
import Artists from "./screens/Artists.js";
import Albums from "./screens/Albums.js";
class Screen extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="screen-container">
        <Menu
          OptionsInMenu={this.props.options}
          selectedOption={this.props.selectedOption}
        />
        {/* selecting various options in main  menu */}

        {this.props.showPage === 0 && this.props.options.length === 4 ? (
          <Game />
        ) : (
          ""
        )}
        {this.props.showPage === 2 && this.props.options.length === 4 ? (
          <Setting />
        ) : (
          ""
        )}
        {this.props.showPage === 3 && this.props.options.length === 4 ? (
          <Coverflow />
        ) : (
          ""
        )}

        {/* if songs option is seleted it will take to list of songs  */}
        {this.props.showPage === 0 && this.props.options.length === 3 ? (
          <AllSongs
            currentMusicSelection={this.props.currentMusicSelection}
            currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
          />
        ) : (
          ""
        )}
        {/* selecting  options in songs  menu */}
        {this.props.showPage === 1 && this.props.options.length === 3 ? (
          <Artists />
        ) : (
          ""
        )}
        {this.props.showPage === 2 && this.props.options.length === 3 ? (
          <Albums />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Screen;
