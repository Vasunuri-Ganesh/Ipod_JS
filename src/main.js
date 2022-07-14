import React from "react";
import Screen from "./screens.js";
import ZingTouch from "zingtouch";
import Buttons from "./buttons.js";
import "./screens/menu.js";
import "./screens/menuItem.js";
import $ from "jquery";
import "./styles.css";

class Main extends React.Component {
  constructor() {
    super();
    this.temp_change_in_angle = 0;
    this.temp_selected = 0;
    this.state = {
      options: ["Games", "Music", "Settings", "CoverFlow"],
      change_in_angle: 0,
      selected: 0,
      showPage: -1,
      general_menu: ["Games", "Music", "Settings", "Cover Flow"],
      songs_sub_menu: ["All Songs", "Artists", "Albums"]
    };
  }

  componentDidMount() {
    var zt = new ZingTouch.Region(
      document.getElementsByClassName("buttons-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("buttons-container")[0],
      "rotate",
      (event) => {
        if (
          document
            .getElementsByClassName("screen-menu")[0]
            .classList.contains("width-50")
        ) {
          //this rotating facility will only be available when the side bar is shown to the user.
          let dist = event.detail.distanceFromLast;
          this.temp_change_in_angle += dist;
          if (this.temp_change_in_angle > 60) {
            this.temp_selected++;
            this.temp_selected = this.temp_selected % this.state.options.length;
            console.log(this.temp_selected);
            this.setState({
              selected: this.temp_selected

              // song_index: -1
            });

            this.temp_change_in_angle = 0;
          } else if (this.temp_change_in_angle < -60) {
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.options.length - 1;

            this.temp_selected = this.temp_selected % this.state.options.length;
            this.setState({
              selected: this.temp_selected
              // song_index: -1
            });
            this.temp_change_in_angle = 0;
          }
        }
      }
    );
  }

  selectButtonClicked = () => {
    if (this.state.selected === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.songs_sub_menu,
        selected: 0,
        showPage: -1
      });
      this.temp_selected = 0;
      return;
    }
    this.setState({
      showPage: this.state.selected,

      selected: 0
    });
    this.temp_selected = 0;
    this.menuButtonClicked();
  };

  menuButtonClicked = () => {
    let screenMenuClassList = document.getElementsByClassName("screen-menu")[0]
      .classList;
    if (screenMenuClassList.contains("width-50")) {
      $(".screen-menu").removeClass("width-50"); //hide menu
    } else {
      $(".screen-menu").addClass("width-50"); //show menu
    }
  };
  leftButtonClicked = () => {
    if (
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    )
      //if the menu is open and it is on the songs page only then if the left button clicked, menu will be changed to general options
      this.setState({
        options: this.state.general_menu,
        selected: 0,
        showPage: -1
      });
  };

  render() {
    const { options } = this.state;
    // console.log(options);
    return (
      <div className="ipod-container">
        <Screen
          options={options}
          selectedOption={this.state.selected}
          showPage={this.state.showPage}
        />
        <Buttons
          menuButtonClicked={this.menuButtonClicked}
          selectButtonClicked={this.selectButtonClicked}
          leftButtonClicked={this.leftButtonClicked}
        />
      </div>
    );
  }
}
export default Main;
