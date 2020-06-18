import {combineReducers} from 'redux';

import modalReducer from './modalReducer';
import logReducer from './logReducer';
import technicianReducer from './technicianReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  log: logReducer,
  technician: technicianReducer
});

export default rootReducer;
