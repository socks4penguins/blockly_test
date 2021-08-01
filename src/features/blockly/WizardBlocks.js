import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  function addBlock(parentBlock, inputName, newBlockType) {
    var parentConnection = parentBlock.getInput(inputName).connection;
    var childBlock = workspace.newBlock(newBlockType);
    childBlock.initSvg();
    childBlock.render();
    var childConnection = childBlock.previousConnection;
    parentConnection.connect(childConnection);
  }

  function getEmptyInputs(block) {
    return block.inputList.filter(input => input.connection.targetConnection === null);
  }

  const wizardBlock =
    selectedBlock && Object.keys(wizard_blocks).filter(type => selectedBlock.type)
      ? Object.keys(wizard_blocks).filter(type => selectedBlock.type)[0]
      : null;
  console.log({ selectedBlock, empty: selectedBlock && getEmptyInputs(selectedBlock) });
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{selectedBlock && ' - ' + selectedBlock.type}</Typography>
      {wizardBlock && (
        <div className="horizontal layout justified">
          <TextField
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
