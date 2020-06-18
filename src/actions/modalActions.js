import {
  ADD_LOG_MODAL,
  EDIT_LOG_MODAL,
  ADD_TECHNICIAN_MODAL,
  TECHNICIANS_LIST_MODAL
} from '../actions/types';

export const toggleAddLogModal = () => ({type: ADD_LOG_MODAL});

export const toggleEditLogModal = () => ({type: EDIT_LOG_MODAL});

export const toggleAddTechnicianModal = () => ({type: ADD_TECHNICIAN_MODAL});

export const toggleTechniciansListModal = () => ({
  type: TECHNICIANS_LIST_MODAL
});
