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
    // var wsObj = new WebSocket("ws://localhost:7834/v1/ws?token=123");   //建立连接
    // wsObj.onopen = function(){  //发送请求
    //     // alert("open");
    //     console.log('connet to websocket')
    //     let data = {
    //       type: 'p2p',
    //       username: 'test2',
    //       message: 'hello'
    //     }
    //     wsObj.send(JSON.stringify(data));
    //     setTimeout(() => {
    //       wsObj.send(JSON.stringify(data));
    //     }, 2000)
    // };
    // wsObj.onmessage = function(ev){  //获取后端响应
    //     // alert(ev.data);
    // };
    // wsObj.onclose = function(ev){
    //     // alert("close");
    // };
    // wsObj.onerror = function(ev){
    //     // alert("error");
    // };

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
