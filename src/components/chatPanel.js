import '~/style/chat-panel.scss';
import React from 'react';
import Header from './chat-panel/header';
import MessagePanel from './chat-panel/messagePanel';
import TextHeader from './chat-panel/textHeader';
import TextInput from './chat-panel/textInput';

class ChatPanel extends React.Component {
  render() {
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
