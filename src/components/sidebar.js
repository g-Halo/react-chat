import '~/style/sidebar.scss';
import React from 'react';

class Sidebar extends React.Component {
  render() {
    const element = (
      <div className="sidebar">
        <div className="user-avatar">
          <img src={require('~/assets/images/avatar-example.jpg')} />
        </div>
        <i className="iconfont iconliaotian active" />
        <i className="iconfont iconlianxiren" />
        <i className="iconfont iconicon-test" />
        <i className="iconfont iconshezhi1" />
      </div>
    );
    return element;
  }
}

module.exports = Sidebar;
