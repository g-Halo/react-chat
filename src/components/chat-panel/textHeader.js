import React from 'react';

class TextHeader extends React.Component {
  render() {
    return (
      <div className="chat-text-header">
        <i className="iconfont iconemoji" />
        <i className="iconfont icontupian" />
        <i className="iconfont iconfujian" />
      </div>
    );
  }
}

module.exports = TextHeader;
