export default [
  {
    blockType: 'lists_create_with',
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
  },
  {
    blockType: 'lists_create_with',
    valueInputs: [
      {
        // parentConnector: 'mutator',
        blockType: 'horizontal_menu_subitems',
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
