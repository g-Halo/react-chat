import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxOrder from 'redux-order';
import reducers from './reduces';
import DevTools from './DevTools';

const enhancer = compose(
  applyMiddleware(reduxOrder()),
  DevTools.instrument()
);

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  enhancer,
  composeWithDevTools()
);

export default store;
