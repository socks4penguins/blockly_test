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

  // console.log('first', selectedBlock && firstChildType(selectedBlock));
  const wizardBlock =
    selectedBlock &&
    wizard_blocks.filter(
      wiz =>
        selectedBlock.type === wiz.blockType &&
        (!wiz.valueInputs[0].blockType ||
          firstChildType(selectedBlock) === wiz.valueInputs[0].blockType),
    ).length > 0
      ? wizard_blocks.filter(
          wiz =>
            selectedBlock.type === wiz.blockType &&
            (!wiz.valueInputs[0].blockType ||
              firstChildType(selectedBlock) === wiz.valueInputs[0].blockType),
        )[0]
      : null;
  // console.log({ selectedBlock, wizardBlock });
  function renderValueInput(valueInput) {
    console.log({ valueInput });
    return (
      <div className="vertical layout">
        
        
        <TextField
          onBlur={e => {
            const fields = valueInput.fields.map(field => {
              return { field: field.field, value: state.main };
            });
            connectBlockToInput({
              parentBlock: selectedBlock,
              inputName: getEmptyInputs(workspace, selectedBlock, true)[0].name,
              childBlock: makeBlock({ workspace, type: valueInput.blockType, fields }),
            });
          }}
          onChange={e => setState({ ...state, main: e.target.value })}
          value={state.main}
        />
      </div>
    );
  }
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{wizardBlock && ' - ' + wizardBlock.prompt}</Typography>
      {wizardBlock && (
        <div className="horizontal layout justified">
          {wizardBlock.valueInputs.map(renderValueInput)}
          {wizardBlock.repeatChildren && <TextField />}
        </div>
      )}
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
