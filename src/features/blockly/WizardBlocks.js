import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import wizard_blocks from '../../data/wizard_blocks';
import * as Blockly from 'blockly';
// import PropTypes from 'prop-types';

export default function WizardBlocks(props) {
  const { selectedBlock, workspace } = props;
  const [state, setState] = useState({});

  function makeBlock({ type, fields }) {
    var childBlock = workspace.newBlock(type);
    // debugger;
    fields.forEach(field => {
      try {
        childBlock.setFieldValue(field.value, field.field);
      } catch {
        console.log("couldn't set field", field);
      }
    });
    childBlock.initSvg();
    childBlock.render();
    return childBlock;
  }

  function connectBlockToInput({ parentBlock, inputName, childBlock }) {
    var parentConnection = parentBlock.getInput(inputName).connection;
    var childConnection = childBlock.outputConnection;
    // debugger;
    const result = childConnection.connect(parentConnection);
    console.log({ result });
    parentBlock.initSvg();
    parentBlock.render();

    // var childBlock1 = workspace.newBlock('text');
    // childBlock1.setFieldValue('Hello', 'TEXT');
    // childBlock1.initSvg();
    // childBlock1.render();

    // var parentBlock1 = workspace.newBlock('text_print');
    // parentBlock1.initSvg();
    // parentBlock1.render();

    // var parentConnection1 = parentBlock1.getInput('TEXT').connection;
    // var childConnection1 = childBlock1.outputConnection;
    // parentConnection1.connect(childConnection1);
  }

  function getEmptyInputs(block, shouldMake) {
    const empty = block.inputList.filter(
      input => input.connection && input.connection.targetConnection === null,
    );

    if (empty.length > 0) return empty;

    if (shouldMake) {
      // // add a new item
      var new_input = block.appendInput_(1, 'ADD' + block.inputList.length);
      block.itemCount_ = block.inputList.length;
      return [new_input];
    }

    return [];
  }

  const wizardBlock =
    selectedBlock && wizard_blocks.filter(type => selectedBlock.type === type.parent)
      ? wizard_blocks.filter(type => selectedBlock.type === type.parent)[0]
      : null;
  // console.log({ selectedBlock, empty: selectedBlock && getEmptyInputs(selectedBlock) });
  return (
    <div className="blockly-wizard-blocks vertical layout">
      <Typography variant="body1">Wizard{selectedBlock && ' - ' + selectedBlock.type}</Typography>
      {wizardBlock && Blockly.selected && (
        <div className="horizontal layout justified">
          <TextField
            onBlur={e => {
              console.log('blur', wizardBlock, state.main, getEmptyInputs(selectedBlock));
              wizardBlock.create.forEach(newBlock => {
                const fields = newBlock.fields.map(field => {
                  return { field: field.field, value: state.main };
                });
                connectBlockToInput({
                  parentBlock: selectedBlock,
                  // inputName: 'ADD0',
                  inputName: getEmptyInputs(selectedBlock, true)[0].name,
                  childBlock: makeBlock({ type: newBlock.type, fields }),
                });
              });
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
