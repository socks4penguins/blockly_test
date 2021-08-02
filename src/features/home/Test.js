import { TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';

export default function Test() {
  const [numberFields, setNumberFields] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  });
  return (
    <div className="home-test">
      {[...Array(numberFields)].map((field, index) => (
        <TextField
          label={`field ${index}`}
          onBlur={e => setNumberFields(numberFields + 1)}
          inputRef={index === numberFields - 1 ? inputRef : null}
        />
      ))}
    </div>
  );
}

Test.propTypes = {};
Test.defaultProps = {};
