export default [
  {
    blockType: 'lists_create_with',
    prompt: 'Menu Items',
    valueInputs: [
      {
        // parentConnector: 'mutator',
        blockType: 'horizontal_menu_item',
        fields: [
          {
            // fields of the child block
            field: 'text', // the field to enter our input to
            inputType: 'text',
            prompt: 'menu text',
          },
          {
            // fields of the child block
            field: 'leftIcon', // the field to enter our input to
            inputType: 'text',
            prompt: 'icon',
          },
        ],
      },
    ],
    workspaceXml:
      '<block type="horizontal_menu_item" id="75Ou1Ucxz=17`A_rxwvQ" x="120" y="110"><field name="leftIcon"></field><field name="text"></field><field name="rightIcon"></field><field name="position">left</field><value name="items"><block type="lists_create_with" id="5Ij=vo2tj;YQh;bF4iQ$"><mutation items="1"></mutation><value name="ADD0"><block type="horizontal_menu_subitems" id="IxAUW.5yZ|r|twYJ[]+b"><field name="leftIcon"></field><field name="text"></field><field name="rightIcon"></field><field name="position">left</field></block></value></block></value></block>',
  },
  {
    blockType: 'lists_create_with',
    prompt: 'Sub-items',
    valueInputs: [
      {
        // parentConnector: 'mutator',
        blockType: 'horizontal_menu_subitems',
        repeat: true,
        fields: [
          {
            // fields of the child block
            field: 'text', // the field to enter our input to
            inputType: 'text',
            prompt: 'menu subitem text',
          },
        ],
      },
    ],
  },
];
