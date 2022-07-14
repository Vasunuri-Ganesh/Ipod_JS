import MenuItem from "./menuItem.js";
import React from "react";
import "../styles.css";
class Menu extends React.Component {
  render() {
    const { OptionsInMenu } = this.props;
    console.log(OptionsInMenu);
    return (
      <div className="screen-menu">
        <MenuItem
          OptionsInMenu={OptionsInMenu}
          selectedOption={this.props.selectedOption}
        />
      </div>
    );
  }
}
export default Menu;
