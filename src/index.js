import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'user', attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
})

store.subscribe(function() {
  console.log(store.getState());
})



/* 
store.dispatch(ACTIONS.add_elem("Element 1"));

store.dispatch(ACTIONS.add_elem("Element 2"));

store.dispatch(ACTIONS.add_elem("Element 3"));

store.dispatch(ACTIONS.remove_elem(1)); */

serviceWorker.unregister();
