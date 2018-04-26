import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div className="homeStyle">
      <div className="centerLogin">
        <a href="/auth/jawbone">Login with Jawbone</a>
        <a href="/auth/jawbone">Signup with Jawbone</a>

      </div>
    </div>
  )
}
