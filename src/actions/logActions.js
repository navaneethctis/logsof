import {
  SET_LOADING,
  LOGS_ERROR,
  SET_LOGS,
  ADD_LOG,
  REMOVE_LOG,
  SET_LOG_TO_EDIT,
  CLEAR_LOG_TO_EDIT,
  UPDATE_LOG
} from '../actions/types';

export const setLoading = () => ({type: SET_LOADING});

export const getLogs = () => async dispatch => {
  dispatch(setLoading());

  try {
    const data = await fetch('/logs').then(response => response.json());

    dispatch({type: SET_LOGS, payload: data});
  } catch (error) {
    dispatch({type: LOGS_ERROR, payload: error.response.statusText});
  }
};

export const addLog = input => async dispatch => {
  dispatch(setLoading());

  try {
    const log = await fetch('/logs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(input)
    }).then(response => response.json());

    dispatch({type: ADD_LOG, payload: log});
  } catch (error) {
    dispatch({type: LOGS_ERROR, payload: error.response.statusText});
  }
};

export const removeLog = id => async dispatch => {
  dispatch(setLoading());

  try {
    await fetch(`/logs/${id}`, {method: 'DELETE'});

    dispatch({type: REMOVE_LOG, payload: id});
  } catch (error) {
    dispatch({type: LOGS_ERROR, payload: error.response.statusText});
  }
};

export const setLogToEdit = log => ({type: SET_LOG_TO_EDIT, payload: log});

export const clearLogToEdit = () => ({type: CLEAR_LOG_TO_EDIT});

export const updateLog = input => async dispatch => {
  dispatch(setLoading());

  try {
    const log = await fetch(`/logs/${input.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(input)
    }).then(response => response.json());

    dispatch({type: UPDATE_LOG, payload: log});
  } catch (error) {
    dispatch({type: LOGS_ERROR, payload: error.response.statusText});
  }
};

export const searchLogs = query => async dispatch => {
  dispatch(setLoading());

  try {
    const data = await fetch(`/logs?q=${query}`).then(response =>
      response.json()
    );

    dispatch({type: SET_LOGS, payload: data});
  } catch (error) {
    dispatch({type: LOGS_ERROR, payload: error.response.statusText});
  }
};
