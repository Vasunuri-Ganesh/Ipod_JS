import React from "react";
import "../styles.css";
class MenuItems extends React.Component {
  render() {
    const { OptionsInMenu } = this.props;
    //  console.log(OptionsInMenu);
    return (
      <>
        {/* rendering options to menu */}
        <React.Fragment>
          {OptionsInMenu.map((item, index) => {
            return (
              <div
                className={
                  this.props.selectedOption === index ? "selected" : ""
                }
                key={index}
              >
                <p>{item}</p>
              </div>
            );
          })}

          <div style={{ color: "green" }}>
            <p style={{ fontSize: 18 }}>
              click{" "}
              <img
                style={{ height: 14, width: 18 }}
                src="https://cdn-icons-png.flaticon.com/128/853/853997.png"
                alt="left-button-icon"
              />{" "}
              to go back
            </p>
          </div>
        </React.Fragment>
      </>
    );
  }
}
export default MenuItems;
