import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMassage: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      currentMassage: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          value= {this.state.currentMassage}
          onChange = {this.handleChange}/>
        {this.props.maxChars - this.state.currentMassage.length}
      </div>
    );
  }
}

export default TwitterMessage;
