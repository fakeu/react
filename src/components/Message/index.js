import React from "react";

import "./style.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      like: 0,
      liked: false
    };
    this.setLike = this.setLike.bind(this);
  }

  setLike() {
    if (!this.state.liked) {
      this.setState({
        like: this.state.like + 1,
        liked: true
      });
    } else {
      this.setState({
        like: this.state.like - 1,
        liked: false
      });
    }
  }

  render() {
    const {
      id,
      avatar,
      created_at,
      message,
      user,
      self,
      onDeleteMessage,
      onOpenModal
    } = this.props;
    return (
      <div className={self ? "message message-self" : "message"}>
        {self ? null : (
          <div className="message-ava">
            <img src={avatar} alt={user} />
          </div>
        )}
        <div className="message-main">
          <div className="message-user">{self ? "You" : user}</div>
          <div className="message-text">{message}</div>
          <i className="message-time">{created_at}</i>
          <br />
          {self ? (
            <div>
              <button
                onClick={() => {
                  onDeleteMessage(id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  onOpenModal(id);
                }}
              >
                Edit
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                this.setLike();
              }}
            >
              Like
            </button>
          )}

          <b>Likes: {this.state.like}</b>
        </div>
      </div>
    );
  }
}

export default Message;
