import React, { useEffect, useRef, useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import * as Blockly from 'blockly';
import {
  blockFieldsHaveValues,
  connectBlockToInput,
  firstBlockOnMutator,
  firstChildType,
  getEmptyInputs,
  makeBlock,
  makeBlockFromXml,
  setFieldValues,
} from './blockly_helper';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});
  const [wizardIndex, setWizardIndex] = useState(null);
  const [activeWizard, setActiveWizard] = useState(null);
  const [numberFields, setNumberFields] = useState(1);
  const inputRef = useRef(null);

  React.useEffect(() => {
    // the first instance of the wizard assigns itself as the current active one
    if (props.wizardIndex === undefined) {
      console.log('self assigning active first one only', props.wizardIndex);
      setWizardIndex(0);
      setActiveWizard(0);
    } else {
      setWizardIndex(props.wizardIndex);
      setActiveWizard(props.activeWizard);
    }
  }, [setWizardIndex, setActiveWizard, props.activeWizard, props.wizardIndex]);

  React.useEffect(() => {
    // only get focus if we are the active one
    if (activeWizard === wizardIndex && inputRef.current) {
      // console.log('setting focus', wizardIndex, numberFields);
      inputRef.current.focus();
    }
  }, [activeWizard, wizardIndex, numberFields]);

  const wizardConfig = selectedBlock && getConfig(selectedBlock);
  if (!wizardConfig && activeWizard === wizardIndex) setActiveWizard(activeWizard + 1);
  function getConfig(parentBlock) {
    const blocks = wizard_blocks.filter(
      wiz =>
        parentBlock.type === wiz.blockType &&
        (!wiz.valueInputs[0].blockType ||
          firstChildType(parentBlock) === wiz.valueInputs[0].blockType),
    );
    return blocks.length > 0 ? blocks[0] : null;
  }

  function commitBlock({ fieldIndex, valueInput, repeatIndex }) {
    const field = valueInput.fields[fieldIndex];
    if (fieldIndex === valueInput.fields.length - 1 && (state[repeatIndex] || {})[field.field]) {
      if (
        blockFieldsHaveValues({
          block: firstBlockOnMutator(selectedBlock),
          fields: valueInput.fields,
        })
      )
        // make a new block
        connectBlockToInput({
          parentBlock: selectedBlock,
          inputName: getEmptyInputs({
            block: selectedBlock,
            addMutation: true,
          })[0].name,
          childBlock: wizardConfig.workspaceXml
            ? makeBlockFromXml({
                workspace,
                workspaceXml: wizardConfig.workspaceXml,
                fieldsObject: state[repeatIndex] || {},
              })
            : makeBlock({
                workspace,
                type: valueInput.blockType,
                fieldsObject: state[repeatIndex] || {},
              }),
        });
      else {
        // use existing block
        setFieldValues({
          block: firstBlockOnMutator(selectedBlock),
          fieldsObject: state[repeatIndex],
        });
      }
      // setState({});
      // only move to next wizard if this one doesn't repeat
      !wizardConfig.valueInputs[0].repeat && setActiveWizard(activeWizard + 1);
    }
  }
  function renderValueInput(valueInput, valueInputKey) {
    return (
      <div className="vertical layout" key={valueInputKey}>
        {valueInput.fields.map((field, fieldIndex) => {
          return [...Array(numberFields)].map((r, repeatIndex) => (
            <TextField
              disabled={wizardIndex !== activeWizard || repeatIndex < numberFields - 1}
              key={repeatIndex}
              inputRef={
                valueInput.repeat ? (repeatIndex === numberFields - 1 ? inputRef : null) : null
              }
              label={field.prompt}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  commitBlock({ fieldIndex, valueInput, repeatIndex });
                  if (valueInput.repeat) setNumberFields(numberFields + 1);
                }
              }}
              onChange={e =>
                setState({
                  ...state,
                  [repeatIndex]: {
                    ...state[repeatIndex],
                    [field.field]: e.target.value,
                  },
                })
              }
              value={(state[repeatIndex] || {})[field.field] || ''}
            />
          ));
        })}
      </div>
    );
  }
  return (
    <div className="blockly-wizard-blocks horizontal layout start">
      <div className="vertical layout center">
        {/* <Typography variant="body1">
          index:{wizardIndex} active:{activeWizard}
        </Typography> */}
        <Typography variant="body1">{wizardConfig && wizardConfig.prompt}</Typography>
        {wizardConfig && (
          <div className="horizontal layout justified">
            {wizardConfig.valueInputs.map(renderValueInput)}
            {wizardConfig.repeatChildren && <TextField />}
          </div>
        )}
      </div>
      {selectedBlock && selectedBlock.childBlocks_.length > 0 && (
        <WizardBlocks
          selectedBlock={selectedBlock.childBlocks_[0]}
          workspace={workspace}
          wizardIndex={wizardIndex + 1}
          activeWizard={activeWizard}
          setActiveWizard={setActiveWizard}
        />
      )}
    </div>
  );
}

WizardBlocks.propTypes = {};
WizardBlocks.defaultProps = {};
