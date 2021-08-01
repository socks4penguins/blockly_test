import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  function makeBlock({ type, fields }) {
    var childBlock = workspace.newBlock(type);
    fields.forEach(field => {
      try {
        childBlock.setFieldValue(field.value, field.name);
      } catch {
        console.Console("couldn't set field", field);
      }
    });
    childBlock.initSvg();
    childBlock.render();
  }
  function addBlockToParent({ parentBlock, inputName, childBlock }) {
    var parentConnection = parentBlock.getInput(inputName).connection;
    var childConnection = childBlock.previousConnection;
    parentConnection.connect(childConnection);
  }

  function getEmptyInputs(block) {
    return block.inputList.filter(
      input => input.connection && input.connection.targetConnection === null,
    );
  }

  const wizardBlock =
    selectedBlock && Object.keys(wizard_blocks).filter(type => selectedBlock.type === type)
      ? wizard_blocks[Object.keys(wizard_blocks).filter(type => selectedBlock.type === type)[0]]
      : null;
  // console.log({ selectedBlock, empty: selectedBlock && getEmptyInputs(selectedBlock) });
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{selectedBlock && ' - ' + selectedBlock.type}</Typography>
      {wizardBlock && (
        <div className="horizontal layout justified">
          <TextField
            onBlur={e => {
              console.log('blur', wizardBlock, state.main, getEmptyInputs(selectedBlock));
            }}
            onChange={e => setState({ ...state, main: e.target.value })}
            value={state.main}
          />
        </div>
      )}
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
