import React from 'react';
import AnimList from './AnimList';
// import PropTypes from 'prop-types';

export default function ListContainer() {
  return (
    <div className="common-list-container">
      <AnimList
        className=""
        springs={{
          items: {
            from: { height: 0, opacity: 1 },
            leave: { height: 0, opacity: 0 },
            enter: { height: 60, opacity: 1 },
            config: { mass: 5, tension: 500, friction: 100 },
            trail: 25,
          },
        }}
      />
    </div>
  );
}

ListContainer.propTypes = {};
ListContainer.defaultProps = {};
