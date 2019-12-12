import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import session from '~/utils/session';

class PrivateRoute extends Component {
    componentWillMount() {
      if(session.getToken() === null){
        const {history} = this.props;
        history.replace("/login");
      }
    }

    render() {
      let { component: Component, ...rest} = this.props;
      return <Route {...rest} render={(props) => ( <Component {...props} />  )}/>
    }
}

export default withRouter(PrivateRoute);
