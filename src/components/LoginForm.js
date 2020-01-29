import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username <input
     id="username"
     type="text"
     name="username"
     value={this.state.username}
     onChange={this.handleInputChange}
   />

          </label>
        </div>
        <div>
          <label>
            Password<input
     id="password"
     type="text"
     name="password"
     value={this.state.password}
     onChange={this.handleInputChange}
   />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
