import React, { useEffect, useRef, useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
// import * as Blockly from 'blockly';
import { connectBlockToInput, firstChildType, getEmptyInputs, makeBlock } from './blockly_helper';
// import PropTypes from 'prop-types';

// const useFocus = () => {
//   const htmlElRef = useRef(null);
//   const setFocus = () => {
//     htmlElRef.current && htmlElRef.current.focus();
//   };

//   return [htmlElRef, setFocus];
// };

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});
  const [repeater, setRepeater] = useState([1]);

  // const [valueInputy, setValueInput] = useState({});
  const inputRef = useRef(null);

  // const [inputRef, setInputFocus] = useFocus();

  // useEffect(() => {
  //   if (valueInput && valueInput.repeat) {
  //     console.log('repeat');
  //     inputRef.current.focus();
  //   }
  // }, [valueInput, valueInput.repeat, inputRef]);

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
    // setValueInput(valueInput);
    return (
      <div className="vertical layout" key={valueInputKey}>
        {/* <button onClick={setInputFocus} >set focus</button> */}
        {valueInput.fields.map((field, fieldIndex) => {
          return repeater.map((r, repeatIndex) => (
            <TextField
              key={repeatIndex}
              // inputRef={input => repeatIndex > 0 && input && input.focus()}
              // inputProps={{ autoFocus: repeatIndex > 0 }}
              autoFocus={repeatIndex > 0}
              inputRef={inputRef}
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
                      fieldsObject: state[repeatIndex] || {},
                    }),
                  });
                  // setState({});
                  if (valueInput.repeat) {
                    setRepeater([...repeater, '']);
                    // bodge
                    // setTimeout(() => {
                    //   console.log({ inputRef });
                    //   inputRef.current.click();
                    // }, 300);
                  }
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
