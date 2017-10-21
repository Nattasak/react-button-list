import React from 'react';

class Button extends React.Component {

  render() {
    // Receive className value from App.js
    let className = this.props.className;

    // Before substr
    console.log(className);

    // Returns the characters in a string beginning at the specified location through the specified number of characters.
    // - delete "btn btn-"
    let str = className.substr(8, 7);

    // Uppercase first letter
    let buttonName = str.charAt(0).toUpperCase() + str.slice(1);

    return(
      <div className="Button">
        <button type="button" className={className}>{buttonName}</button>
      </div>
    );
  }
}

export default Button;
