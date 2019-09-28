import Sidebar from '~/components/sidebar';
import ContactPanel from '~/components/contactPanel';
import ChatPanel from '~/components/chatPanel';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
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
