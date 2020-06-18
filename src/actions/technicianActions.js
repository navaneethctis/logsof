import {
  SET_LOADING,
  TECHNICIANS_ERROR,
  SET_TECHNICIANS,
  ADD_TECHNICIAN,
  REMOVE_TECHNICIAN
} from '../actions/types';

export const setLoading = () => ({type: SET_LOADING});

export const getTechnicians = () => async dispatch => {
  dispatch(setLoading());

  try {
    const data = await fetch('/technicians').then(response => response.json());

    dispatch({type: SET_TECHNICIANS, payload: data});
  } catch (error) {
    dispatch({type: TECHNICIANS_ERROR, payload: error.response.statusText});
  }
};

export const addTechnician = input => async dispatch => {
  dispatch(setLoading());

  try {
    const technician = await fetch('/technicians', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(input)
    }).then(response => response.json());

    dispatch({type: ADD_TECHNICIAN, payload: technician});
  } catch (error) {
    dispatch({type: TECHNICIANS_ERROR, payload: error.response.statusText});
  }
};

export const removeTechnician = id => async dispatch => {
  dispatch(setLoading());

  try {
    await fetch(`/technicians/${id}`, {method: 'DELETE'});

    dispatch({type: REMOVE_TECHNICIAN, payload: id});
  } catch (error) {
    dispatch({type: TECHNICIANS_ERROR, payload: error.response.statusText});
  }
};
