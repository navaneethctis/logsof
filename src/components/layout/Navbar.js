import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => (
  <div className='navbar is-light'>
    <div className='navbar-brand'>
      <a href='/' className='navbar-item'>
        <span className='icon is-large'>
          <i className={icon}></i>
        </span>
        {title && <h1 className='title'>{title}</h1>}
      </a>
    </div>
  </div>
);

Navbar.defaultProps = {
  icon: 'fas fa-clipboard-list fa-2x'
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Navbar;
