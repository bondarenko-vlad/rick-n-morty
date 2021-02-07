import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store'
import {Provider} from 'react-redux'



const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App dispatch={store.dispatch} state={store.getState()}  />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerender(store.getState())
store.subscribe(()=>{
  rerender(store.getState())
})


window.store = store
