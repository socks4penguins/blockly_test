import Blockly from 'blockly';

Blockly.Blocks['go_to_menu'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('go to menu')
      .appendField(new Blockly.FieldTextInput(''), 'menu_name');
    this.setPreviousStatement(true, 'code');
    this.setNextStatement(true, 'code');
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_set'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('set');
    this.appendStatementInput('onFinished')
      .setCheck('code')
      .appendField('onFinished');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menus_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Menus Function')
      .appendField(new Blockly.FieldTextInput('myFunction'), 'function_name');
    this.appendStatementInput('fields')
      .setCheck('field')
      .appendField('fields');
    this.appendStatementInput('menus')
      .setCheck('menu')
      .appendField('menus');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['setstate'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('setState')
      .appendField(new Blockly.FieldTextInput(''), 'field')
      .appendField(':')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setPreviousStatement(true, 'code');
    this.setNextStatement(true, 'code');
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['icon'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('icon')
      .appendField(new Blockly.FieldTextInput(''), 'icon')
      .appendField('link')
      .appendField(new Blockly.FieldTextInput(''), 'link');
    this.appendValueInput('dropdonMenus')
      .setCheck(null)
      .appendField('dropDownMenus');
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menu'] = {
  init: function() {
    this.appendStatementInput('CHILDREN')
      .setCheck(null)
      .appendField('name')
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('title')
      .appendField(new Blockly.FieldTextInput(''), 'TITLE');
    this.setPreviousStatement(true, 'menu');
    this.setNextStatement(true, 'menu');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_component'] = {
  init: function() {
    this.appendValueInput('COMPONENT').setCheck('component');
    // .appendField('component');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_floating_button'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('Floating button');
    this.appendStatementInput('onClick')
      .setCheck(null)
      .appendField('onClick');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_list'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('list listen')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'listen');
    this.appendStatementInput('onRowClick')
      .setCheck(null)
      .appendField('onRowClick');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_add'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('add');
    this.appendStatementInput('onFinished')
      .setCheck('code')
      .appendField('onFinished');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menu_init_field'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('field')
      .appendField(new Blockly.FieldTextInput(''), 'field')
      .appendField(
        new Blockly.FieldDropdown([
          ['string', 'string'],
          ['number', 'number'],
          ['boolean', 'boolean'],
        ]),
        'type',
      )
      .appendField('column header')
      .appendField(new Blockly.FieldTextInput(''), 'headerName')
      .appendField('add label')
      .appendField(new Blockly.FieldTextInput(''), 'addLabel')
      .appendField('width')
      .appendField(new Blockly.FieldNumber(0, 0), 'width');
    this.setPreviousStatement(true, 'field');
    this.setNextStatement(true, 'field');
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
