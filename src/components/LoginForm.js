import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      paswword:""
    };
  }

  
  handleChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
    //console.log(this.state.username)
  }

  handleSubmit =(e)  =>{
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
   if(username!=="" && password!==""){
    this.props.handleLogin(username, password)
     }
    
  }


  render() {
    return (
      <form onSubmit = {e=>{this.handleSubmit(e)}}>
        <div>
          <label>
            Username
            <input onChange = { e => this.handleChange(e)} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange = { e => this.handleChange(e)} id="password" name="password" type="password" />
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
