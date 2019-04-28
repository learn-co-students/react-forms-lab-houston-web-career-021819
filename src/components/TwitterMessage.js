import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      maxChars: 140
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      maxChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleChange(e)}/>
        <p>Your remaining characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
