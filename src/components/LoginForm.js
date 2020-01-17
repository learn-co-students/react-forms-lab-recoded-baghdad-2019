import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

   this.state = {
      username: "",password: ""};
  }
  usernameChange = (e) => {this.setState({username: e.target.value})
  }

  passwordChange = (e) => {this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username, this.state.password)
    if (this.state.username !== "" && this.state.password !== ""){this.props.handleLogin(this.state)}
    else {console.log('Please fill in the requirements')}}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.usernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.passwordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
};
export default LoginForm;
