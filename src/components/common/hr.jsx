import { Component } from "react";

class Hr extends Component {
  render() {
    const hr = {
      border: "none",
      borderTop: "3px double #333",
      color: "#333",
      overflow: "visible",
      textAlign: "center",
      height: "5px",
    };

    return <hr style={hr}></hr>;
  }
}

export default Hr;
