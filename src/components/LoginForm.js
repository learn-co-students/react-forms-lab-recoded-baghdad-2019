import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
<<<<<<< HEAD
            Username <input
     id="username"
     type="text"
     name="username"
     value={this.state.username}
     onChange={this.handleInputChange}
   />

=======
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
>>>>>>> 370071dee7b5c6ac8ccc8f38f06398e7e70773b2
          </label>
        </div>
        <div>
          <label>
<<<<<<< HEAD
            Password<input
     id="password"
     type="text"
     name="password"
     value={this.state.password}
     onChange={this.handleInputChange}
   />
=======
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
>>>>>>> 370071dee7b5c6ac8ccc8f38f06398e7e70773b2
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