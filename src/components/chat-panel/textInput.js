import ContactActions from '~/redux/reduces/contact/action';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button } from 'element-react';

@connect(
  state => ({contact: state.contact, socket: state.socket}),
  dispatch => bindActionCreators(ContactActions, dispatch)
)
class TextInput extends React.Component {
  constructor (props) {
    super(props)
  }

  send() {
    const message = this.refs.textarea.value
    if (message === '') {
      return 
    }

    const { sendMessage, contact } = this.props;
    for(let i = 0; i < 30; i ++) {
      console.log("调试，同一时间发送30次请求")
      sendMessage(contact.currentRoomId, contact.activeUsername, message)
    }

    // reset input
    this.refs.textarea.value = ''
  }

  render() {
    return (
      <div className="chat-text-input">
        <textarea placeholder="enter 键发送" ref='textarea' />
        <Button
          type="primary"
          onClick={this.send.bind(this)}
        >
          发送
        </Button>
      </div>
    );
  }
}

module.exports = TextInput;
