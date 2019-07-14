import React from "react";
import Header from "./components/Header/index";
import Message from "./components/Message/index";
import Preloader from "./components/Preloader/index";
import Form from "./components/Form/index";
import "./App.css";

const currentDate = () => {
  const l = new Date();
  return l.toLocaleString();
};

const idGenerator = () => {
  const min = 1000000000000;
  const max = 9999999999999;
  return Math.floor(Math.random() * (max - min)) + min;
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: "Anton",
      avatar: "https://i.pravatar.cc/300?img=14",
      msg: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/1hiqin", {
      method: "GET"
    })
      .then(data => data.json())
      .then(msg => {
        this.setState({
          loading: false,
          msg: [...msg]
        });
      });
  }

  deleteMessage(id) {
    const rmMsg = this.state.msg.filter(msg => {
      return msg.id !== id;
    });
    this.setState({
      msg: [...rmMsg]
    });
  }

  sendMessage(message) {
    const { user, avatar } = this.state;
    const newMsg = {
      id: idGenerator(),
      user,
      avatar,
      created_at: currentDate(),
      message,
      marked_read: false,
      self: true
    };
    this.setState({
      msg: [newMsg, ...this.state.msg]
    });
  }

  render() {
    const { msg, loading } = this.state;
    const msgLength = msg.length;

    return (
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <div>
            <Header
              name="Binary-chat"
              usersCount="33"
              msgCount={msgLength}
              lastMsg={msg[0].created_at}
            />
            <Form onSendMessage={this.sendMessage} />
            <div>
              {msg.map(msg => {
                return (
                  <Message
                    key={msg.id}
                    id={msg.id}
                    avatar={msg.avatar}
                    created_at={msg.created_at}
                    message={msg.message}
                    user={msg.user}
                    self={msg.self}
                    onDeleteMessage={this.deleteMessage}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Chat;
