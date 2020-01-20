import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      counter: props.maxChars
    };
  }
  handleTextChange = event => {
    this.setState({
      message: event.target.value,
      counter: this.props.maxChars - event.target.value.length
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleTextChange(event)}
          maxLength={this.props.maxChars}
          value={this.state.message}

        />
        {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
