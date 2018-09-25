import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider, connect } from 'react-redux'
import phones from './modules/phones'
import modal from './modules/modal'

const store = createStore( combineReducers({phones, modal}), applyMiddleware(thunk))

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
registerServiceWorker();

const mapStateToProps=(state)=>{
    return state
};

export default connect ( mapStateToProps )( App );