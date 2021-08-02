import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import * as Blockly from 'blockly';
import { connectBlockToInput, firstChildType, getEmptyInputs, makeBlock } from './blockly_helper';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  // console.log('first', selectedBlock && firstChildType(selectedBlock));
  const wizardBlock = selectedBlock && getEntryBlock(wizard_blocks);

  function getEntryBlock(wizConfig) {
    const blocks = wizConfig.filter(
      wiz =>
        selectedBlock.type === wiz.blockType &&
        (!wiz.valueInputs[0].blockType ||
          firstChildType(selectedBlock) === wiz.valueInputs[0].blockType),
    );
    return blocks.length > 0 ? blocks[0] : null;
  }

  function renderValueInput(valueInput, valueInputKey) {
    console.log({ valueInput });
    return (
      <div className="vertical layout" key={valueInputKey}>
        {valueInput.fields.map((field, fieldIndex) => {
          return (
            <TextField
              key={fieldIndex}
              label={field.prompt}
              onBlur={e => {
                if (fieldIndex === valueInput.fields.length - 1)
                  connectBlockToInput({
                    parentBlock: selectedBlock,
                    inputName: getEmptyInputs({ block: selectedBlock, addMutation: true })[0].name,
                    childBlock: makeBlock({
                      workspace,
                      type: valueInput.blockType,
                      fieldsObject: state[valueInput.blockType],
                    }),
                  });
              }}
              onChange={e =>
                setState({
                  ...state,
                  [valueInput.blockType]: {
                    ...state[valueInput.blockType],
                    [field.field]: e.target.value,
                  },
                })
              }
              value={state[valueInput.blockType] && state[valueInput.blockType][field.prompt]}
            />
          );
        })}
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
