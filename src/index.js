import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux";
import {priceReducer} from "./reducers/priceReducer"

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(priceReducer)
console.log("my store " + store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, rootElement);
