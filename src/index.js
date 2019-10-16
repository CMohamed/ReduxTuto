import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose } from 'redux'
import todoApp from './reducers/reducers'
import {ADD_TODO} from "./actions/actions";

const store = createStore(
    todoApp,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

console.log(store.getState());

store.dispatch({
    type: ADD_TODO,
    text: 'hhhh'
});
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));