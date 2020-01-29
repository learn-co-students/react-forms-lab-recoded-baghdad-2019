import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" name="message" id="message" length="280" />
=======
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
>>>>>>> 370071dee7b5c6ac8ccc8f38f06398e7e70773b2
      </div>
    );
  }
}

export default TwitterMessage;
