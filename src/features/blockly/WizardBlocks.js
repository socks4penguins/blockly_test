import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import * as Blockly from 'blockly';
import { connectBlockToInput, firstChildType, getEmptyInputs, makeBlock } from './blockly_helper';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  console.log('first', selectedBlock);
  const wizardConfig = selectedBlock && getConfig(selectedBlock);

  function getConfig(parentBlock) {
    const blocks = wizard_blocks.filter(
      wiz =>
        parentBlock.type === wiz.blockType &&
        (!wiz.valueInputs[0].blockType ||
          firstChildType(parentBlock) === wiz.valueInputs[0].blockType),
    );
    return blocks.length > 0 ? blocks[0] : null;
  }

  function renderValueInput(valueInput, valueInputKey) {
    // console.log({ valueInput });
    return (
      <div className="vertical layout" key={valueInputKey}>
        {valueInput.fields.map((field, fieldIndex) => {
          return (
            <TextField
              key={fieldIndex}
              label={field.prompt}
              onBlur={e => {
                if (fieldIndex === valueInput.fields.length - 1) {
                  connectBlockToInput({
                    parentBlock: selectedBlock,
                    inputName: getEmptyInputs({
                      block: selectedBlock,
                      addMutation: true,
                    })[0].name,
                    childBlock: makeBlock({
                      workspace,
                      type: valueInput.blockType,
                      fieldsObject: state,
                    }),
                  });
                  setState({});
                }
              }}
              onChange={e =>
                setState({
                  ...state,
                  [field.field]: e.target.value,
                })
              }
              value={state[field.field]}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="blockly-wizard-blocks horizontal layout start">
      <div className="vertical layout center">
        <Typography variant="body1">{wizardConfig && wizardConfig.prompt}</Typography>
        {wizardConfig && (
          <div className="horizontal layout justified">
            {wizardConfig.valueInputs.map(renderValueInput)}
            {wizardConfig.repeatChildren && <TextField />}
          </div>
        )}
      </div>
      {selectedBlock && selectedBlock.childBlocks_.length > 0 && (
        <WizardBlocks selectedBlock={selectedBlock.childBlocks_[0]} workspace={workspace} />
      )}
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
