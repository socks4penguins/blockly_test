import * as Blockly from 'blockly';
export function makeBlock({ workspace, type, fields, fieldsObject }) {
  var childBlock = workspace.newBlock(type);
  return setFieldValues({ block: childBlock, fields, fieldsObject });
}

export function setFieldValues({ block, fields, fieldsObject }) {
  (fields || fieldsObject2fieldsArray(fieldsObject)).forEach(field => {
    try {
      block.setFieldValue(field.value, field.field);
    } catch {
      console.log("couldn't set field", field);
    }
  });
  block.initSvg();
  block.render();
  return block;
}
export function firstChildType(block) {
  return block.childBlocks_.length > 0 && block.childBlocks_[0].type;
}

export function connectBlockToInput({ parentBlock, inputName, childBlock }) {
  var parentConnection = parentBlock.getInput(inputName).connection;
  var childConnection = childBlock.outputConnection;
  // debugger;
  const result = childConnection.connect(parentConnection);
  // console.log({ result });
  parentBlock.initSvg();
  parentBlock.render();

  // if it didn't work make sure block was actually connected
}

export function getEmptyInputs({ block, addMutation }) {
  const empty = block.inputList.filter(
    input => input.connection && input.connection.targetConnection === null,
  );

  if (empty.length > 0) return empty;

  if (addMutation) {
    // // add a new item
    var new_input = block.appendInput_(1, 'ADD' + block.inputList.length);
    block.itemCount_ = block.inputList.length;
    return [new_input];
  }

  return [];
}

export function firstBlockOnMutator(block) {
  return block.childBlocks_[0];
}

export function blockFieldsHaveValues({ block, fields }) {
  // console.log('first blockFieldsHaveValues', block, fields);
  var hasValues = false;
  fields.forEach(field => {
    // debugger;
    if (block.getFieldValue(field.field) !== '') hasValues = true;
  });
  return hasValues;
}

export function fieldsObject2fieldsArray(fieldsObject) {
  // debugger;
  return Object.keys(fieldsObject).map(key => {
    return { value: fieldsObject[key], field: key };
  });
}

export function makeBlockFromXml({ workspace, workspaceXml, fieldsObject }) {
  var block = Blockly.Xml.domToBlock(Blockly.Xml.textToDom(workspaceXml), workspace);
  setFieldValues({ workspace, block, fieldsObject });
  return block;
}

//  function makeDuplicateBlockWithEmptyValues({ workspace, block }) {
//   // var newBlock = makeNewBlockWithEmptyValues({ workspace, block })
//   // Save the clipboard.
//   var clipboardXml = Blockly.clipboardXml_;
//   var clipboardSource = Blockly.clipboardSource_;
//   //   // Create a duplicate via a copy/paste operation.
//   Blockly.copy(block);
//   //  var block = Blockly.Xml.domToBlock(xmlBlock, this);

//   //   toDuplicate.workspace.paste(Blockly.clipboardXml_);
//   //   // Restore the clipboard.
//   //   Blockly.clipboardXml_ = clipboardXml;
//   //   Blockly.clipboardSource_ = clipboardSource;
//   // };
//   //  var block = Blockly.Xml.domToBlock(xmlBlock, this);
// }

// function getAllFields(block) {
//   var fields = [];
//   block.inputList.forEach(input => {
//     fields = fields.concat(input.fieldRow);
//   });
//   return fields;
// }
