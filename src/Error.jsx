// Error.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  return (
    <div className='Error'>
      <h1 className='error-heading'>{error.status}</h1>
      <h3 className='error-heading'>{error.statusText}</h3>
      <p className='error-heading'>{error.data} </p>

      <Link to='/'>
        <p className='error-text'>HOME</p>
      </Link>
      {/* <p className='error-message'>Click here to navigate back to the home page</p> */}

    </div>
  );
}

export default Error;
