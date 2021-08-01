export default [
  {
    parent: 'lists_create_with',
    child: 'horizontal_menu_items',
    prompt: 'horizontal items',
    create: [
      {
        type: 'text',
        fields: [{ field: 'TEXT' }],
        prompt: 'text value',
        repeat: true,
      },
    ],
  },
  {
    parent: 'logic_compare',
    create: [
      {
        type: 'text',
        fields: [{ field: 'TEXT' }],
        prompt: 'text value',
        repeat: true,
      },
    ],
  },
  {
    parent: 'text_join',
    // works
    create: [
      {
        type: 'text',
        fields: [{ field: 'TEXT' }],
        prompt: 'text value',
        repeat: true,
      },
    ],
  },
  {
    parent: 'lists_repeat',
    create: [
      {
        type: 'text',
        fields: [{ field: 'TEXT' }],
        prompt: 'text value',
        repeat: true,
      },
    ],
  },
];
