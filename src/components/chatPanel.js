import '~/style/chat-panel.scss';
import ContactActions from '~/redux/reduces/contact/action';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './chat-panel/header';
import MessagePanel from './chat-panel/messagePanel';
import TextHeader from './chat-panel/textHeader';
import TextInput from './chat-panel/textInput';

@connect(
  state => ({contact: state.contact}),
  dispatch => bindActionCreators(ContactActions, dispatch)
)
class ChatPanel extends React.Component {
  render() {
    const {contact: {contact}} = this.props;
    if (typeof contact.user === 'undefined') {
      return (
        <div className="chat-panel empty">
          嗨，Chat！
        </div>
      );
    }

    return (
      <div className="chat-panel">
        <Header />
        <MessagePanel />
        <TextHeader />
        <TextInput />
      </div>
    );
  }
}

module.exports = ChatPanel;
