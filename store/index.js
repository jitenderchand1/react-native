import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../reducer';

const configure = () => {
  return createStore(reducer,{}, applyMiddleware(reduxThunk));
}

export default configure;