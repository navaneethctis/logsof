import {
  ADD_LOG_MODAL,
  EDIT_LOG_MODAL,
  ADD_TECHNICIAN_MODAL,
  TECHNICIANS_LIST_MODAL
} from '../actions/types';

const initialState = {
  addLogModal: false,
  editLogModal: false,
  addTechnicianModal: false,
  techniciansListModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG_MODAL:
      return {...state, addLogModal: !state.addLogModal};
    case EDIT_LOG_MODAL:
      return {...state, editLogModal: !state.editLogModal};
    case ADD_TECHNICIAN_MODAL:
      return {...state, addTechnicianModal: !state.addTechnicianModal};
    case TECHNICIANS_LIST_MODAL:
      return {...state, techniciansListModal: !state.techniciansListModal};
    default:
      return state;
  }
};

export default modalReducer;
