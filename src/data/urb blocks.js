import Blockly from 'blockly';
import { tailwind_options } from './tailwind options';

function getTailwindItems(selectedGroup) {
  // console.log(tailwind_options.filter(group => group.name === 'Layout'));
  return tailwind_options
    .filter(group => group.items && group.name.toLowerCase() === selectedGroup)[0]
    .items.filter(item => item.selectors)
    .map(item => [item.name, item.name]);
}

Blockly.Blocks['tailwind_dropdown'] = {
  init: function() {
    this.appendValueInput('next')
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ['layout ', 'layout'],
          ['spacing', 'spacing'],
          ['background', 'background'],
          ['transform', 'transform'],
          ['effects', 'effects'],
          ['flexbox', 'flexbox'],
        ]),
        'group',
      )
      .appendField(
        new Blockly.FieldDropdown(() => {
          console.log('dr', this.getFieldValue('group'));
          return getTailwindItems(this.getFieldValue('group'));
          // === 'spacing'
          // ? [
          //     ['spacing', 'spacing'],
          //     ['spacing2', 'spacing2'],
          //   ]
          // : [
          //     [' ', 'none'],
          //     ['small', 'sm'],
          //     ['medium', 'md'],
          //     ['large', 'lg'],
          //     ['x large', 'xl'],
          //     ['xx large', '2xl'],
          //   ];
        }),
        'options',
      );
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['horizontal_menu_subitems'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('icon')
      .appendField(new Blockly.FieldTextInput(''), 'leftIcon')
      .appendField('text')
      .appendField(new Blockly.FieldTextInput(''), 'text')
      .appendField(new Blockly.FieldTextInput(''), 'rightIcon')
      .appendField('icon');
    this.appendDummyInput()
      .appendField('text position')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'left'],
          ['center', 'center'],
          ['right', 'right'],
        ]),
        'position',
      );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['horizontal_menu_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('icon')
      .appendField(new Blockly.FieldTextInput(''), 'leftIcon')
      .appendField('text')
      .appendField(new Blockly.FieldTextInput(''), 'text')
      .appendField(new Blockly.FieldTextInput(''), 'rightIcon')
      .appendField('icon');
    this.appendDummyInput()
      .appendField('text position')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'left'],
          ['center', 'center'],
          ['right', 'right'],
        ]),
        'position',
      );
    this.appendValueInput('items')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('items');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menu_item'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('icon')
      .appendField(new Blockly.FieldTextInput(''), 'leftIcon')
      .appendField(
        new Blockly.FieldDropdown([
          ['label', 'label'],
          ['title', 'title'],
        ]),
        'typr',
      )
      .appendField(new Blockly.FieldTextInput(''), 'text')
      .appendField(new Blockly.FieldTextInput(''), 'rightIcon')
      .appendField('icon');
    this.appendDummyInput()
      .appendField('text position')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'left'],
          ['center', 'center'],
          ['right', 'right'],
        ]),
        'position',
      )
      .appendField('close on click')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'closeOnClick');
    this.appendDummyInput()
      .appendField('go to menu')
      .appendField(new Blockly.FieldTextInput(''), 'goToMenu');
    this.setOutput(true, 'menu item');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

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
