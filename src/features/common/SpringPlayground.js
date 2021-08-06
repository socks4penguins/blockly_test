import React from 'react';
import SpringAnimator from './SpringAnimator';
// import PropTypes from 'prop-types';

export default function SpringPlayground() {
  return (
    <div className="fit common-spring-playground horizontal layout full-height">
      <div className="vertical layout flex"></div>
      <div className="vertical layout flex center center-justified" ><SpringAnimator 
      
      /></div>
    </div>
  );
}

SpringPlayground.propTypes = {};
SpringPlayground.defaultProps = {};
