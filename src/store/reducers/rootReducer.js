import authReducer from './authReducer'
import projectReducer from './projectReducer'
import shiftReducer from './shiftReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  shift: shiftReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
