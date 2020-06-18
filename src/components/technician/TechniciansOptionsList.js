import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getTechnicians} from '../../actions/technicianActions';

const TechniciansOptionsList = ({technicians, getTechnicians}) => {
  useEffect(() => {
    getTechnicians();

    // eslint-disable-next-line
  }, []);

  return (
    technicians &&
    technicians.map(({id, firstName, lastName}) => (
      <option key={id} value={`${firstName} ${lastName}`}>
        {firstName} {lastName}
      </option>
    ))
  );
};

TechniciansOptionsList.propTypes = {
  technicians: PropTypes.array,
  getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  technicians: state.technician.technicians
});

export default connect(mapStateToProps, {getTechnicians})(
  TechniciansOptionsList
);
