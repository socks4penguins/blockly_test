import Blockly from 'blockly';

Blockly.JavaScript['menus_function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_fields = Blockly.JavaScript.statementToCode(block, 'fields');
  var statements_menus = Blockly.JavaScript.statementToCode(block, 'menus');
  // TODO: Assemble JavaScript into code variable.
  var code = `function ${text_function_name}({state, setState}) {
    if (!state.fields) setState({
      fields: [${statements_fields}],
      reduxPath:"", path:""
    });

    return [${statements_menus}]
  }`;
  return code;
};

Blockly.JavaScript['menu'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // var checkbox_primary = block.getFieldValue('PRIMARY') == 'TRUE';
  // var dropdown_position = block.getFieldValue('POSITION');
  var text_title = block.getFieldValue('TITLE');
  var statements_children = Blockly.JavaScript.statementToCode(block, 'CHILDREN');
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    name: "${text_name}",
    title: "${text_title}",
    children: [${statements_children}]
  },\n`;
  return code;
};

Blockly.JavaScript['menu_init_field'] = function(block) {
  var text_field = block.getFieldValue('field');
  var dropdown_type = block.getFieldValue('type');
  var text_headername = block.getFieldValue('headerName');
  var text_addlabel = block.getFieldValue('addLabel');
  var number_width = block.getFieldValue('width');
  // TODO: Assemble JavaScript into code variable.
  var code = `{ field: "${text_field}", type: "${dropdown_type}", headerName: "${text_headername}", addLabel: "${text_addlabel}", width: ${number_width}},\n`;
  return code;
};

Blockly.JavaScript['urb_component'] = function(block) {
  var value_component = Blockly.JavaScript.valueToCode(
    block,
    'COMPONENT',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    component: (
      ${value_component}
    )
  },`;
  return code;
};

Blockly.JavaScript['item'] = function(block) {
  var text_name = block.getFieldValue('name');
  var text_lefticon = block.getFieldValue('leftIcon');
  var dropdown_typr = block.getFieldValue('typr');
  var text_text = block.getFieldValue('text');
  var text_righticon = block.getFieldValue('rightIcon');
  var dropdown_position = block.getFieldValue('position');
  var checkbox_closeonclick = block.getFieldValue('closeOnClick') == 'TRUE';
  var text_gotomenu = block.getFieldValue('goToMenu');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['icon'] = function(block) {
  var text_icon = block.getFieldValue('icon');
  var text_link = block.getFieldValue('link');
  var value_dropdonmenus = Blockly.JavaScript.valueToCode(
    block,
    'dropdonMenus',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['urb_floating_button'] = function(block) {
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'children',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_on_click = Blockly.JavaScript.statementToCode(block, 'onClick');
  // TODO: Assemble JavaScript into code variable.
  var code = `<UrbFloatingButton 
    ${statements_on_click.length > 0 ? 'onClick={(item) => ' + statements_on_click + '}' : ''}
  >
    ${value_children ? value_children : ''}
  </UrbFloatingButton>\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['urb_list'] = function(block) {
  var checkbox_listen = block.getFieldValue('listen') == 'TRUE';
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'children',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_onrowclick = Blockly.JavaScript.statementToCode(block, 'onRowClick');
  // TODO: Assemble JavaScript into code variable.
  var code = `  <UrbList ${checkbox_listen ? 'listen ' : ''} {...state}
      ${statements_onrowclick ? 'onRowClick={(item) => {\n' + statements_onrowclick + '}}' : ''}
  >${value_children ? '\n     ' + value_children : ''}</UrbList>\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['urb_add'] = function(block) {
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'children',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `<UrbAdd {...state}/>\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['setstate'] = function(block) {
  var text_field = block.getFieldValue('field');
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = `setState({ ${text_field}: "${text_value}"})\n`;
  return code;
};

Blockly.JavaScript['go_to_menu'] = function(block) {
  var text_menu_name = block.getFieldValue('menu_name');
  // TODO: Assemble JavaScript into code variable.
  var code = `setState({ activeMenu: "${text_menu_name}"})\n`;
  return code;
};

Blockly.JavaScript['urb_set'] = function(block) {
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'children',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `<UrbSet {...state}>${value_children ? '\n' + value_children + '\n' : ''}</UrbSet>`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
