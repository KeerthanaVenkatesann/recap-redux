// store.js

import { createStore, combineReducers } from 'redux';
import itemReducer from './Reducer';

const rootReducer = combineReducers({
  item: itemReducer
});

const store = createStore(rootReducer);

export default store;
