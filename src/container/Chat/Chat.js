import React from "react";
import Header from "../../components/Header/index";
import Message from "../../components/Message/index";
import Preloader from "../../components/Preloader/index";
import Form from "../../components/Form/index";
import User from "../../components/User/index";
import Modal from "../../components/Modal/index";
import {
  getMessages,
  addMessage,
  deleteMessage,
  editMessage,
  editMsgInModal
} from "./actions";
import { idGenerator, currentDate } from "../../helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      user: "Anton",
      avatar: "https://i.pravatar.cc/300?img=14"
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.getMessages();
  }

  deleteMessage(id) {
    const rmMsg = this.props.messages.filter(msg => {
      return msg.id !== id;
    });
    this.props.deleteMessage(rmMsg);
  }

  editMessage(message) {
    let index = 0;
    this.props.messages.map((msg, i) => {
      if (msg.id === message.id) {
        index = i;
      }
      return false;
    });
    this.props.messages[index] = message;
    this.props.addMessage(this.props.messages);
  }

  openModal(id) {
    const editMsg = this.props.messages.filter(msg => {
      return msg.id === id;
    });
    this.props.editMsgInModal(...editMsg);
    this.setState({
      isModalOpen: !this.state.isModalOpen
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
    this.props.addMessage([newMsg, ...this.props.messages]);
  }

  render() {
    const { messages = [], loading, editInmodal } = this.props;
    const { isModalOpen } = this.state;
    const msgLength = messages.length;

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
              lastMsg={messages[0].created_at}
            />
            <Form onSendMessage={this.sendMessage} />
            <div className="main-wrapper">
              <div className="chat-wrapper">
                {messages.map(msg => {
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
                      onOpenModal={this.openModal}
                    />
                  );
                })}
              </div>
              <div className="user-wrapper">
                {messages.map(user => {
                  return (
                    <User
                      key={`user${user.id}`}
                      id={user.id}
                      avatar={user.avatar}
                      user={user.user}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {isModalOpen ? (
          <Modal
            closeModal={this.openModal}
            id={editInmodal}
            saveEditMessage={this.editMessage}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = rootState => ({
  messages: rootState.chat.messages,
  loading: rootState.chat.loading,
  editInmodal: rootState.chat.editInmodal
});

const actions = {
  getMessages,
  addMessage,
  deleteMessage,
  editMessage,
  editMsgInModal
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
