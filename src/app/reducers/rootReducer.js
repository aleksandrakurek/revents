import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import {reducer as toastReducer} from 'react-redux-toastr';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import modalReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    test: testReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastReducer,
})

export default rootReducer
