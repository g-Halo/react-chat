import React from 'react';
import ContactActions from '~/redux/reduces/contact/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(
  state => ({contact: state.contact, user: state.user}),
  dispatch => bindActionCreators(ContactActions, dispatch)
)
class MessagePanel extends React.Component {
  render() {
    const {contact: {currentContact: {messages}}} = this.props;
    const currentUser = this.props.user.user
    if (messages === null || messages.length === 0) {
      return (
        <div className="chat-message-panel">
          暂无消息
        </div>
      );
    }

    const messageBody = messages.map(message =>
      (
        <div className={`${message.sender === currentUser.username ? 'owner' : 'target-user'}`}>
          <img className="chat avatar small" src={require('~/assets/images/avatar-example.jpg')} />
          <div className="message-box">
            {message.body}
          </div>
        </div>));
    return (
      <div className="chat-message-panel">
        {messageBody}
      </div>
    );
  }
}

module.exports = MessagePanel;
