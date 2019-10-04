import ContactActions from '~/redux/reduces/contact/action';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

@connect(
  state => ({contact: state.contact}),
  dispatch => bindActionCreators(ContactActions, dispatch)
)
class Header extends React.Component {
  render() {
    const {contact: {contact}} = this.props;
    return (
      <div className="chat-header">
        <div className="chat-header__user-info">
          <img className="chat avatar normal" src={require('~/assets/images/avatar-example.jpg')} />
          <div className="username">
            <div>{contact.user.nickname}</div>
            <div className="text-gray fs12">在线</div>
          </div>
        </div>
        <div className="header-operate">
          <i className="iconfont iconicon_tianjiahaoyou" />
          <i className="iconfont iconjilu" />
        </div>
      </div>
    );
  }
}

module.exports = Header;
