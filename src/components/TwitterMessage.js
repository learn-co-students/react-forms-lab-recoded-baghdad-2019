import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      massage:"",
      counter:props.maxChars
    };
  }

  handleChange=event=>{
    this.setState({
      massage:event.target.value,
      counter:this.props.maxChars-event.target.value.length
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.massage} onChange={event=>this.handleChange(event)}/>  {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
