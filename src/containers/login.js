import userAction from '~/redux/reduces/user/action';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Notification, Button, Input, Form} from 'element-react';

@connect(
  state => ({user: state.user}),
  dispatch => bindActionCreators(userAction, dispatch)
)
class App extends Component {
  state = {
    form: {
      username: '',
      password: ''
    },
    rules: {
      username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
      ],
      password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
      ]
    }
  }

  onEmailChange(value) {
    this.setState({
      form: Object.assign({}, this.state.form, {username: value})
    });
  }

  onPasswordChange(value) {
    this.setState({
      form: Object.assign({}, this.state.form, {password: value})
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.form.validate((valid) => {
      if (valid) {
        if (this.props.login(this.state.form)) {
          // 登录成功
        } else {
          Notification({
            message: '用户名或密码有误',
            type: 'error'
          });
        }
      } else {
        Notification({
          message: '请输入用户名、密码',
          type: 'error'
        });
      }
    });
  }

  render() {
    return (
      <div className="login-session">
        <h3>登录</h3>
        <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100">
          <Form.Item prop="username" label="用户名">
            <Input
              value={this.state.form.username}
              onChange={this.onEmailChange.bind(this)}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item prop="password" label="密码">
            <Input
              value={this.state.form.password}
              type="password"
              onChange={this.onPasswordChange.bind(this)}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;
