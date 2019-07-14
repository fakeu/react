import React from "react";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
      this.setState({ text: "" });
      this.props.onSendMessage(this.state.text);
    }
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
