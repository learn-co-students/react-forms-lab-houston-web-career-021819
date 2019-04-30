import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      remainingCharacters: 140
    };
  }

  handleChange =(event)=> {
    this.setState({
      value: event.target.value,
      remainingCharacters: this.state.remainingCharacters - this.state.value.split(' ').length
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="textarea" name="message" id="message" value ={this.state.value} onChange={this.handleChange}/>
        Remaining Characters: {this.state.remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
