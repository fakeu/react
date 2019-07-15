import React from "react";

import "./style.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
      this.props.id.message = this.state.text;
      this.props.saveEditMessage(this.props.id);
      this.props.closeModal(false);
    }
  }

  componentDidMount() {
    this.setState({
      text: this.props.id.message
    });
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
          <form onSubmit={e => this.onSubmit(e)}>
            <textarea
              className="modal-textarea"
              name=""
              id=""
              value={this.state.text}
              onChange={e => {
                this.onChange(e);
              }}
              cols="30"
              rows="10"
            />
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
