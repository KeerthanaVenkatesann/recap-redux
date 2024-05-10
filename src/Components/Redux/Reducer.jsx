// reducers.js

import { combineReducers, createStore } from "redux";

const initialValue = {
  count: 0
};

const formData = {
  name: '',
  password: ''
};


function ReducerRedux(state = initialValue, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}


function FormReducer(state = formData, action) {
  switch (action.type) {
    case 'NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}


function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}


const rootReducer = combineReducers({ ReducerRedux, FormReducer, todoReducer });


export const store = createStore(rootReducer);
