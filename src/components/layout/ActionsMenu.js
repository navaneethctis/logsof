import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  toggleAddLogModal,
  toggleAddTechnicianModal,
  toggleTechniciansListModal
} from '../../actions/modalActions';
import {searchLogs} from '../../actions/logActions';

const ActionsMenu = ({
  toggleAddLogModal,
  toggleAddTechnicianModal,
  toggleTechniciansListModal,
  searchLogs
}) => {
  const query = useRef(null);

  const handleChange = () => {
    searchLogs(query.current.value);
  };

  return (
    <div className='section pb-0'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-two-fifths'>
            <form>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input
                    type='text'
                    ref={query}
                    onChange={handleChange}
                    id='query'
                    className='input'
                  />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-search'></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className='column is-narrow'>
            <div className='buttons'>
              <button
                onClick={toggleAddLogModal}
                className='button is-info is-inverted'
              >
                <span className='icon'>
                  <i className='fas fa-plus-circle'></i>
                </span>
                <span>Add Log</span>
              </button>
              <button
                onClick={toggleAddTechnicianModal}
                className='button is-success is-inverted'
              >
                <span className='icon'>
                  <i className='fas fa-plus-circle'></i>
                </span>
                <span>Add Technician</span>
              </button>
              <button
                onClick={toggleTechniciansListModal}
                className='button is-danger is-inverted'
              >
                <span className='icon'>
                  <i className='fas fa-eye'></i>
                </span>
                <span>View Technicians</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionsMenu.propTypes = {
  toggleAddLogModal: PropTypes.func.isRequired,
  toggleAddTechnicianModal: PropTypes.func.isRequired,
  toggleTechniciansListModal: PropTypes.func.isRequired,
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, {
  toggleAddLogModal,
  toggleAddTechnicianModal,
  toggleTechniciansListModal,
  searchLogs
})(ActionsMenu);
