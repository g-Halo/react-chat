import Sidebar from '~/components/sidebar';
import ContactPanel from '~/components/contactPanel';
import ChatPanel from '~/components/chatPanel';
import contactActions from '~/redux/reduces/contact/action';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(
  state => ({contact: state.contact}),
  dispatch => bindActionCreators(contactActions, dispatch)
)
class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
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
