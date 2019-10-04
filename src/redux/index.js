import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxOrder from 'redux-order';
import reducers from './reduces';
// import DevTools from './DevTools';

const enhancer = composeWithDevTools(
  applyMiddleware(reduxOrder()),
  applyMiddleware(thunk),
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;
