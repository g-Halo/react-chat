import Sidebar from '~/components/sidebar';
import ContactPanel from '~/components/contactPanel';
import ChatPanel from '~/components/chatPanel';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../redux/reduces/contact';

@connect(
  state => ({contact: state.contact}),
  dispatch => bindActionCreators(contactActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalContacts} = this.props;
    initalContacts();
  }
  render() {
    return (
      <div className="chat-container">
        <Sidebar />
        <ContactPanel />
        <ChatPanel />
      </div>
    );
  }
}

export default App;
