import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
// import wizard_blocks from '../../data/wizard_blocks';
import wizard_blocks from '../../data/wizard_blocks copy';
import * as Blockly from 'blockly';
import { connectBlockToInput, firstChildType, getEmptyInputs, makeBlock } from './blockly_helper';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  

  console.log('first', selectedBlock && firstChildType(selectedBlock));
  const wizardBlock =
    selectedBlock &&
    wizard_blocks.filter(
      wiz =>
        selectedBlock.type === wiz.blockType &&
        (!wiz.valueInputs[0].blockType || firstChildType(selectedBlock) === wiz.valueInputs[0].blockType),
    ).length > 0
      ? wizard_blocks.filter(
          wiz =>
            selectedBlock.type === wiz.blockType &&
            (!wiz.valueInputs[0].blockType || firstChildType(selectedBlock) === wiz.valueInputs[0].blockType),
        )[0]
      : null;
  // console.log({ selectedBlock, wizardBlock });
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{wizardBlock && ' - ' + wizardBlock.prompt}</Typography>
      {wizardBlock && Blockly.selected && (
        <div className="horizontal layout justified">
          <TextField
            onBlur={e => {
              // console.log('blur', wizardBlock, state.main, getEmptyInputs(selectedBlock));
              wizardBlock.valueInputs.forEach(newBlock => {
                const fields = newBlock.fields.map(field => {
                  return { field: field.field, value: state.main };
                });
                connectBlockToInput({
                  parentBlock: selectedBlock,
                  // inputName: 'ADD0',
                  inputName: getEmptyInputs(workspace, selectedBlock, true)[0].name,
                  childBlock: makeBlock({workspace, type: newBlock.blockType, fields }),
                });
              });
            }}
            onChange={e => setState({ ...state, main: e.target.value })}
            value={state.main}
          />
          {wizardBlock.repeatChildren && <TextField />}
        </div>
      )}
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
