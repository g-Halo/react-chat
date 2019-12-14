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
    // var wsObj = new WebSocket("ws://localhost:7834/v1/ws?token=123");   //建立连接
    // wsObj.onopen = function(){  //发送请求
    //   console.log('connet to websocket')
    // };
    // wsObj.onmessage = function(e){  //获取后端响应
    //   console.log(e)
    // };
    // wsObj.onclose = function(ev){
    //   console.log(ev)
    // };
    // wsObj.onerror = function(ev){
    //   console.log(ev)
    // };
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
