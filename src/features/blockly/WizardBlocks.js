import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock } = props;
  const [state, setState] = useState({});

  console.log({ selectedBlock });
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{selectedBlock && ' - ' + selectedBlock.type}</Typography>
      <div className="horizontal layout justified">
        <TextField
          onChange={e => setState({ ...state, main: e.target.value })}
          value={state.main}
        />
      </div>
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
