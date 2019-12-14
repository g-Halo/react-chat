import ContactActions from '~/redux/reduces/contact/action';
import '~/style/contact-panel.scss';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

@connect(
  state => ({contact: state.contact, socket: state.socket}),
  dispatch => bindActionCreators(ContactActions, dispatch)
)
class List extends React.Component {
  componentDidMount() {
    const socket = this.props.socket.socket
    socket.prototype.on('message', (e) => {
      console.log('message:', e)
    })
  }

  onSwitchUser(user) {
    const {changeContact, fetchContact} = this.props;
    changeContact(user);
    fetchContact(user);
  }

  render() {
    const {
      contact: {
        contacts,
        activeUserId
      }
    } = this.props;
    if (!contacts || contacts.length === 0) {
      return (
        <div className="contact-panel__list">
          User not found.
        </div>
      );
    }

    const userInfo = contacts.map((user) =>
      (
        <div
          key={user.username}
          className={
            `contact-panel__user ${activeUserId === user.username ? 'active' : ''}`
          }
          onClick={this.onSwitchUser.bind(this, user)}
        >
          <div className="user-avatar">
            <img src={require('~/assets/images/avatar-example.jpg')} />
          </div>
          <div className="contact-panel-user__info">
            <div className="user__header">
              <span className="user__name">{user.nickname}</span>
              <span className="text-gray fs12">
                {moment(user.last_message.created_at).format('hh:mm')}
              </span>
            </div>
            <div className="user__desc">
              <span className="text-gray message-desc">{user.last_message.body}</span>
              { user.unread > 0 ? (<span className="unread-circle">{user.unread}</span>) : '' }
            </div>
          </div>
        </div>));

    return (
      <div className="contact-panel__list">
        { userInfo }
      </div>
    );
  }
}

export default List;
