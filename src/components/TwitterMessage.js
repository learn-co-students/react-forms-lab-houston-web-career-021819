import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <p>Your remaining characters: {this.props.maxChars - this.state.message.length}</p>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
