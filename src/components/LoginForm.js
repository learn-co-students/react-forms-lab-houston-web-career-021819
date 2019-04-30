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

  render() {
    return (
      <form onSubmit ={(event) => {
        event.preventDefault()
        if((this.state.username !== "") && (this.state.password !== "")){
          this.props.handleLogin(this.state.username, this.state.password)
        }
      }
      }>
        <div>
          <label>
            Username
            < input id = "username"
            name = "username"
            type = "text"
            value = {
              this.state.username
            }
            onChange = {
              event => this.handleChange(event)
            }
            />
          </label>
        </div>
        <div>
          <label>
            Password
            < input id = "password"
            name = "password"
            type = "password"
            value = {
              this.state.password
            }
            onChange = {
              event=> this.handleChange(event)
            }
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
