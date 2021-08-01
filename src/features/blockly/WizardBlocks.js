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

    // make the mutator
    // var mutator = Blockly.Block.obtain(Blockly.getMainWorkspace(), 'text_join');
    // mutator.initSvg();
    // mutator.render();

    // // add a new item
    // var new_input = mutator.appendInput_(1, 'ADD' + mutator.inputList.length);
    // mutator.itemCount_ = mutator.inputList.length;

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
              wizardBlock.targets.forEach(target => {
                const fields = target.fields.map(field => {
                  return { field: field.field, value: state.main };
                });
                connectBlockToInput({
                  parentBlock: selectedBlock,
                  // inputName: 'ADD0',
                  inputName: getEmptyInputs(selectedBlock)[0].name,
                  childBlock: makeBlock({ type: target.type, fields }),
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
