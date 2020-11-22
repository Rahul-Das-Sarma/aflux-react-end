import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Productreducer from './store/reducers/Productreducer'
import CartReducer from './store/reducers/cartReducer';
import productDetailsReducer from './store/reducers/productDetailreducer';
import {UserSignupReducer, UserSigninReducer } from './store/reducers/userReducer';



const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action)
          console.log('[Middleware]', store.getState())
          return result
         
      }
  }
}

const initialState = {
  UserSignIn:{
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
    token: null
  }
   ,
    
    cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
     
  shippingAddress: localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
  }
}



const rootReducers = combineReducers({
  prdt: Productreducer,
  prdDetails: productDetailsReducer,
  cart: CartReducer,
  userSignupOf: UserSignupReducer,
  UserSignIn: UserSigninReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,initialState ,composeEnhancers(applyMiddleware(logger,thunk)));



ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <BrowserRouter>  
            <App />  
       </BrowserRouter>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
