import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router';

//globe css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';
import './style/main.scss';

ReactDOM.render(<Root />, document.getElementById('app'));
