import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getLogs} from '../../actions/logActions';

import LogItem from './LogItem';

const LogsList = ({logs, getLogs}) => {
  useEffect(() => {
    getLogs();

    // eslint-disable-next-line
  }, []);

  return (
    <section className='section'>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Message</th>
              <th>Technician</th>
              <th>Needs Attention</th>
              <th>Last Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {logs && logs.map(log => <LogItem key={log.id} log={log} />)}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  logs: state.log.logs
});

export default connect(mapStateToProps, {getLogs})(LogsList);
