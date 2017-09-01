import React from 'react'
import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router'
import { Router, Route , Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { routerReducer } from 'react-router-redux';
// import IndexPage from 'Pages/index';
import Root from 'Routes/routes';

const reducer = combineReducers({
        routing: routerReducer
      }),
      store = createStore(
        reducer
      );

const renderAll = ()=>{
  ReactDOM.render((
    <Provider store={store}>
      <Root />
    </Provider>
  ), document.getElementById('root'))
}

store.subscribe(renderAll);
renderAll();