export function makeBlock({ workspace, type, fields, fieldsObject }) {
  var childBlock = workspace.newBlock(type);
  // debugger;
  (
    fields ||
    Object.keys(fieldsObject).map(key => {
      return { value: fieldsObject[key], field: key };
    })
  ).forEach(field => {
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
