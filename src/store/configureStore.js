import { createStore } from 'redux';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(rootReducer, initialState);