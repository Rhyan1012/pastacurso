import React from "react";
import "../Button/button.css";

export class Button extends React.Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>);
  }
}
