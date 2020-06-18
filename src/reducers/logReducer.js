import {
  SET_LOADING,
  LOGS_ERROR,
  SET_LOGS,
  ADD_LOG,
  REMOVE_LOG,
  SET_LOG_TO_EDIT,
  CLEAR_LOG_TO_EDIT,
  UPDATE_LOG,
  SEARCH_LOGS
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  logs: null,
  logToEdit: null
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: true};
    case LOGS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    case SET_LOGS:
      return {...state, isLoading: false, logs: action.payload};
    case ADD_LOG:
      return {
        ...state,
        isLoading: false,
        logs: [...state.logs, action.payload]
      };
    case REMOVE_LOG:
      return {
        ...state,
        isLoading: false,
        logs: state.logs.filter(log => log.id !== action.payload)
      };
    case SET_LOG_TO_EDIT:
      return {
        ...state,
        logToEdit: action.payload
      };
    case CLEAR_LOG_TO_EDIT:
      return {
        ...state,
        logToEdit: null
      };
    case UPDATE_LOG:
      return {
        ...state,
        isLoading: false,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case SEARCH_LOGS:
      return {...state, isLoading: false, logs: action.payload};
    default:
      return state;
  }
};

export default logReducer;
