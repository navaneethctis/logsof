import {
  SET_LOADING,
  TECHNICIANS_ERROR,
  SET_TECHNICIANS,
  ADD_TECHNICIAN,
  REMOVE_TECHNICIAN
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  technicians: null
};

const technicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: true};
    case TECHNICIANS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    case SET_TECHNICIANS:
      return {...state, isLoading: false, technicians: action.payload};
    case ADD_TECHNICIAN:
      return {
        ...state,
        isLoading: false,
        technicians: [...state.technicians, action.payload]
      };
    case REMOVE_TECHNICIAN:
      return {
        ...state,
        technicians: state.technicians.filter(
          technician => technician.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default technicianReducer;
