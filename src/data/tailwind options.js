const hover = { name: 'hover' };
const groupHover = { name: 'group-hover' };
const focus = { name: 'focus' };
const focusWithin = { name: 'focus-within' };
const numberValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  'px',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
];

function makeNumberValues(text, values) {
  var out = [];
  numberValuePrefixes(text).forEach(prefix => {
    out = out.concat(values.map(value => `${prefix.name}${value}`));
  });
  return out;
}

// function makeSpacingValues(text, values) {
//   var out = [];
//   values.forEach(prefix => {
//     out = out.concat(values.map(value => `${prefix.name}${value}`));
//   });
//   return out;
// }

function makePercentageValues(text) {
  return percentageValues.map(val => `${text}${val}`);
}

function numberValuePrefixes(text, description) {
  return [
    { name: `.${text}-`, description: `${description}` },
    { name: `.${text}x-`, description: `${description} x-axis` },
    { name: `.${text}y-`, description: `${description} y-axis` },
    { name: `.${text}t-`, description: `${description} top` },
    { name: `.${text}b-`, description: `${description} bottom` },
    { name: `.${text}l-`, description: `${description} left` },
    { name: `.${text}r-`, description: `${description} right` },
  ];
}

const percentageValues = [
  '0',
  '5',
  '10',
  '20',
  '25',
  '30',
  '40',
  '50',
  '60',
  '70',
  '75',
  '80',
  '90',
  '95',
  '100',
];

// function makePercentageValues(text, description) {
//   return [
//     { name: `.${text}-`, description: `${description}` },
//     { name: `.${text}x-`, description: `${description} x-axis` },
//     { name: `.${text}y-`, description: `${description} y-axis` },
//     { name: `.${text}t-`, description: `${description} top` },
//     { name: `.${text}b-`, description: `${description} bottom` },
//     { name: `.${text}l-`, description: `${description} left` },
//     { name: `.${text}r-`, description: `${description} right` },
//   ];
// }

const breakpoints = [
  { name: 'sm', description: 'width < 640px' },
  { name: 'md', description: 'width < 768px' },
  { name: 'lg', description: 'width < 1024px' },
  { name: 'xl', description: 'width < 1280px' },
  { name: '2xl', description: 'width < 1536px' },
];

const colorValues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

function makeColors(text) {
  var outColors = [];
  const colors = ['gray', 'red', 'green', 'blue', 'yellow', 'indigo', 'purple', 'pink'];
  colors.forEach(color => {
    outColors = outColors.concat(colorValues.map(value => `${color}-${value}`));
  });
  outColors = ['transparent', 'current', 'black', 'white'].concat(outColors);
  return outColors.map(color => `${text}${color}`);
}

const positionValues = [
  'bottom',
  'top',
  'left',
  'right',
  'center',
  'left-bottom',
  'left-top',
  'right-bottom',
  'right-top',
];

function makePositions(text) {
  return positionValues.map(pos => `${text}${pos}`);
}

export const tailwind_options = [
  {
    name: 'Layout',
    selectors: [breakpoints],
    items: [
      { name: 'box-decoration-break', description: '' },
      {
        name: 'box-sizing',
        selectors: ['.box-border', '.box-content'],
        description: 'Sets how the total width and height of an element is calculated.',
      },
      { name: 'clear', description: '' },
      { name: 'container', description: '' },
      {
        name: 'display',
        selectors: [
          'hidden',
          '.block',
          '.inline-block',
          '.inline',
          '.flex',
          '.inline-flex',
          '.table',
          '.inline-table',
          '.table-caption',
          '.table-cell',
          '.table-column',
          '.table-column-group',
          '.table-footer-group',
          '.table-header-group',
          '.table-row-group',
          '.table-row',
          '.flow-root',
          '.grid',
          '.inline-grid',
          '.contents',
          '.list-item',
        ],
        description: 'Sets the display box type of an element.',
      },
      { name: 'float', description: '' },
      { name: 'isolation', description: '' },
      {
        name: 'object-fit',
        selectors: [
          '.object-contain',
          '.object-cover',
          '.object-fill',
          '.object-none',
          '.object-scale-down',
        ],
        description:
          'Sets how the content of a replaced element (img or video tag) should be resized.',
      },
      { name: 'object-position', description: '' },
      {
        name: 'overflow',
        selectors: [
          '.overflow-auto',
          '.overflow-hidden',
          '.overflow-visible',
          '.overflow-scroll',
          '.overflow-x-auto',
          '.overflow-y-auto',
          '.overflow-x-hidden',
          '.overflow-y-hidden',
          '.overflow-x-visible',
          '.overflow-y-visible',
          '.overflow-x-scroll',
          '.overflow-y-scroll',
        ],
        description: "Sets how to handle content that's too big for its container.",
      },
      { name: 'overscroll', description: '' },
      {
        name: 'position',
        selectors: ['.static', '.fixed', '.absolute', '.relative', '.sticky	'],
        description: "Sets an element's position.",
      },
      { name: 'top, right, bottom, left', description: '' },
      {
        name: 'visibility',
        selectors: ['.visible', '.invisible'],
        description: 'Show or hide without affecting the layout of the document.',
      },
      {
        name: 'z-index',
        selectors: ['.z-0', '.z-10', '.z-20', '.z-30', '.z-40', '.z-50', '.z-auto	'],
        description: 'Sets the z-order ("stack order") of a positioned element.',
      },
    ],
  },
  {
    name: 'Spacing',
    selectors: [breakpoints],
    items: [
      {
        name: 'padding',
        selectors: makeNumberValues('p', numberValues),
        description: 'Controls padding in 0.25rem increments.',
      },
      {
        name: 'margin',
        selectors: makeNumberValues('m', numberValues),
        description: 'Controls margin in 0.25rem increments.',
      },
      // {
      //   name: 'space between',
      //   selectors:  ['x','y'].map(dir=>``sdafdsfs),
      //   description:
      //     'Sets left or top (x or y) margin between child elements, but skips the first element.',
      // },
    ],
  },
  {
    name: 'Background',
    selectors: [breakpoints],
    items: [
      {
        name: 'background opacity',
        selectors: makePercentageValues('.bg-opacity-'),
        description: '',
      },
      { name: 'background-attachment', description: '' },
      { name: 'background-clip', description: '' },
      {
        name: 'background-color',
        selectors: makeColors('.bg-'),
        description: 'backgroundColor',
      },
      {
        name: 'background-image',
        // selectors: [],
        description: 'Sets position of a background image.',
      },
      {
        name: 'background-position',
        selectors: makePositions('.bg-'),
        description: 'Sets position of a background image.',
      },
      { name: 'background-repeat', description: '' },
      { name: 'background-size', description: '' },
      { name: 'gradient color', description: '' },
    ],
  },
  {
    name: 'Table',
    selectors: [breakpoints],
    items: [
      { name: 'boder-collapse', description: '' },
      { name: 'table-layout', description: '' },
    ],
  },
  // {
  //   name: 'Transform',
  //   selectors: [[hover, focus], breakpoints],
  //   items: [
  //     { name: 'scale', selectors: [], description: '' },
  //     { name: 'rotate', selectors: [], description: '' },
  //     { name: 'translate', selectors: [], description: '' },
  //     { name: 'skew', description: '' },
  //     { name: 'transform-origin', description: '' },
  //     { name: 'transform', selectors: [], description: '' },
  //   ],
  // },
  {
    name: 'Effects',
    selectors: [[groupHover, hover], [focus, focusWithin], breakpoints],
    items: [
      {
        name: 'box-shadow',
        selectors: [
          '.shadow',
          '.shadow-inner',
          '.shadow-none',
          ...breakpoints.map(bp => `.shadow-${bp.name}`),
        ],
        description: '',
      },
      {
        name: 'opacity',
        selectors: makePercentageValues('.opacity-'),
        description: '',
      },
      { name: 'mix-blend-mode', description: '' },
      { name: 'background-blend-mode', description: '' },
    ],
  },
  {
    name: 'Flexbox',
    selectors: [['.flex ', '.flex-inline '], breakpoints],
    items: [
      //  { name: 'display', selectors: [], description: '' },
      {
        name: 'flex',
        selectors: ['.flex-1', '.flex-auto', '.flex-initial', '.flex-none'],
        description: 'Controls how flex items grow and shrink.',
      },
      {
        name: 'flex-direction',
        selectors: ['.flex-row', '.flex-row-reverse', '.flex-col', '.flex-col-reverse'],
        description: 'Sets direction of flex items.',
      },
      {
        name: 'flex-grow',
        selectors: ['.flex-grow', '.flex-grow-0'],
        description: 'Controls how flex items grow.',
      },
      {
        name: 'flex-shrink',
        selectors: ['.flex-shrink', '.flex-shrink-0'],
        description: 'Controls how flex items shrink.',
      },
      {
        name: 'flex-wrap',
        selectors: ['.flex-wrap', '.flex-wrap-reverse', '.flex-nowrap'],
        description: '',
      },
      { name: 'order', description: '' },
    ],
  },
  {
    name: 'Sizing',
    selectors: [breakpoints],
    items: [
      {
        name: 'width',
        selectors: [...makeNumberValues('.w-', numberValues)],
        description: 'Sets the width of an element.',
      },
      {
        name: 'min-width',
        selectors: ['.min-w-0', '.min-w-full', '.min-w-min', '.min-w-max'],
        description: 'Sets the minimum width of an element.',
      },
      {
        name: 'max-width',
        selectors: [
          [
            '.max-w-0',
            '.max-w-none',
            '.max-w-xs',
            '.max-w-sm',
            '.max-w-md',
            '.max-w-lg',
            '.max-w-xl',
            '.max-w-2xl',
            '.max-w-3xl',
            '.max-w-4xl',
            '.max-w-5xl',
            '.max-w-6xl',
            '.max-w-7xl',
            '.max-w-full',
            '.max-w-min',
            '.max-w-max',
            '.max-w-prose',
            '.max-w-screen-sm',
            '.max-w-screen-md',
            '.max-w-screen-lg',
            '.max-w-screen-xl',
            '.max-w-screen-2xl',
          ],
        ],
        description: 'Sets the maximum width of an element.',
      },
      {
        name: 'height',
        selectors: makeNumberValues('.w-', numberValues),
        description: 'Sets the height of an element.',
      },
      {
        name: 'min-height',
        selectors: [['.min-h-0', '.min-h-full', '.min-h-screen']],
        description: 'Sets the minimum height of an element.',
      },
      {
        name: 'max-height',
        selectors: makeNumberValues('.max-h-', numberValues),
        description: 'Sets the maximum height of an element.',
      },
    ],
  },
  {
    name: 'Border',
    selectors: [
      [groupHover, hover],
      [focus, focusWithin],
    ],
    items: [
      {
        name: 'border opacity',
        selectors: makeNumberValues('border-opacity', numberValues),
        description: '',
      },
      { name: 'border-color', selectors: makeColors('.border-'), description: '' },
      {
        name: 'border-radius',
        selectors: [
          '.rounded-none',
          '.rounded-sm',
          '.rounded',
          '.rounded-md',
          '.rounded-lg',
          '.rounded-xl',
          '.rounded-2xl',
          '.rounded-3xl',
          '.rounded-full',
          '.rounded-t-none',
          '.rounded-r-none',
          '.rounded-b-none',
          '.rounded-l-none',
          '.rounded-t-sm',
          '.rounded-r-sm',
          '.rounded-b-sm',
          '.rounded-l-sm',
          '.rounded-t',
          '.rounded-r',
          '.rounded-b',
          '.rounded-l',
          '.rounded-t-md',
          '.rounded-r-md',
          '.rounded-b-md',
          '.rounded-l-md',
          '.rounded-t-lg',
          '.rounded-r-lg',
          '.rounded-b-lg',
          '.rounded-l-lg',
          '.rounded-t-xl',
          '.rounded-r-xl',
          '.rounded-b-xl',
          '.rounded-l-xl',
          '.rounded-t-2xl',
          '.rounded-r-2xl',
          '.rounded-b-2xl',
          '.rounded-l-2xl',
          '.rounded-t-3xl',
          '.rounded-r-3xl',
          '.rounded-b-3xl',
          '.rounded-l-3xl',
          '.rounded-t-full',
          '.rounded-r-full',
          '.rounded-b-full',
          '.rounded-l-full',
          '.rounded-tl-none',
          '.rounded-tr-none',
          '.rounded-br-none',
          '.rounded-bl-none',
          '.rounded-tl-sm',
          '.rounded-tr-sm',
          '.rounded-br-sm',
          '.rounded-bl-sm',
          '.rounded-tl',
          '.rounded-tr',
          '.rounded-br',
          '.rounded-bl',
          '.rounded-tl-md',
          '.rounded-tr-md',
          '.rounded-br-md',
          '.rounded-bl-md',
          '.rounded-tl-lg',
          '.rounded-tr-lg',
          '.rounded-br-lg',
          '.rounded-bl-lg',
          '.rounded-tl-xl',
          '.rounded-tr-xl',
          '.rounded-br-xl',
          '.rounded-bl-xl',
          '.rounded-tl-2xl',
          '.rounded-tr-2xl',
          '.rounded-br-2xl',
          '.rounded-bl-2xl',
          '.rounded-tl-3xl',
          '.rounded-tr-3xl',
          '.rounded-br-3xl',
          '.rounded-bl-3xl',
          '.rounded-tl-full',
          '.rounded-tr-full',
          '.rounded-br-full',
          '.rounded-bl-full',
        ],

        description: '',
      },
      {
        name: 'border-style',
        selectors: [
          '.border-solid',
          '.border-dashed',
          '.border-dotted',
          '.border-double',
          '.border-none',
        ],
        description: '',
      },
      {
        name: 'border-width',
        selectors: [
          '.border',
          '.border-0	',
          '.border-2	',
          '.border-4	',
          '.border-8	',
          '.border-t	',
          '.border-t-0	',
          '.border-t-2	',
          '.border-t-4	',
          '.border-t-8	',
          '.border-r	',
          '.border-r-0	',
          '.border-r-2	',
          '.border-r-4	',
          '.border-r-8	',
          '.border-b	',
          '.border-b-0	',
          '.border-b-2	',
          '.border-b-4	',
          '.border-b-8	',
          '.border-l	',
          '.border-l-0	',
          '.border-l-2	',
          '.border-l-4	',
          '.border-l-8	',
        ],
        description: 'Sets border width in increments of 1px.',
      },
      { name: 'divide color', description: '' },
      { name: 'divide opacity', description: '' },
      { name: 'divide style', description: '' },
      { name: 'divide width', description: '' },
      { name: 'ring color', description: '' },
      { name: 'ring offset color', description: '' },
      { name: 'ring offset width', description: '' },
      { name: 'ring opacity', description: '' },
      { name: 'ring width', description: '' },
    ],
    // description:'Set the border of the element.'
  },
  {
    name: 'Transition',
    selectors: [breakpoints],
    items: [
      {
        name: 'animation',
        selectors: [
          ['.animate-none', '.animate-spin', '.animate-ping', '.animate-pulse', '.animate-bounce'],
        ],
        description: 'Sets CSS animations.',
      },
      {
        name: 'transition-delay',
        selectors: [
          [
            '.delay-75',
            '.delay-100',
            '.delay-150',
            '.delay-200',
            '.delay-300',
            '.delay-500',
            '.delay-700',
            '.delay-1000',
          ],
        ],
        description: 'Sets the delay for transitions.',
      },
      {
        name: 'transition-duration',
        selectors: [
          [
            '.duration-75',
            '.duration-100',
            '.duration-150',
            '.duration-200',
            '.duration-300',
            '.duration-500',
            '.duration-700',
            '.duration-1000',
          ],
        ],
        description: 'Sets the length of time for a transition animations to complete.',
      },
      {
        name: 'transition-property',
        selectors: [
          [
            '.transition',
            '.transition-none',
            '.transition-none',
            '.transition-all',
            '.transition-colors',
            '.transition-opacity',
            '.transition-shadow',
          ],
        ],
        description: 'Sets the CSS properties affected by transition animations.',
      },
      { name: 'transition-timing-function', selectors: [], description: '' },
    ],
  },
  {
    name: 'Cursor',
    selectors: [breakpoints],
    items: [
      {
        name: 'appearance',
        selectors: [['.appearance-none']],
        description: "Disables native styling based on the operating system's theme.",
      },
      {
        name: 'cursor',
        selectors: [
          [
            '.cursor-auto',
            '.cursor-default',
            '.cursor-pointer',
            '.cursor-wait',
            '.cursor-text',
            '.cursor-move',
            '.cursor-help',
            '.cursor-not-allowed',
          ],
        ],
        description: 'Changes the cursor when hovering over an element.',
      },
      { name: 'outline', description: '' },
      {
        name: 'pointer-events',
        selectors: [['.pointer-events-none', '.pointer-events-auto']],
        description: 'Specifies whether an element is the target of mouse events.',
      },
      { name: 'resize', description: '' },
      { name: 'user-select', description: '' },
    ],
  },
  {
    name: 'Grid',
    selectors: [breakpoints],
    items: [
      { name: 'gap', description: '' },
      { name: 'grid-auto-columns', description: '' },
      { name: 'grid-auto-flow', description: '' },
      { name: 'grid-auto-rows', description: '' },
      { name: 'grid-column, start/end', description: '' },
      { name: 'grid-row, start/end', description: '' },
      { name: 'grid-template-columns', description: '' },
      { name: 'grid-template-rows', description: '' },
    ],
  },
  {
    name: 'Box Alignment',
    selectors: [breakpoints],
    items: [
      {
        name: 'align-content',
        selectors: [
          [
            '.content-start',
            '.content-center',
            '.content-end',
            '.content-between',
            '.content-around',
            '.content-evenly',
          ],
        ],
        description: 'Controls how lines are positioned in multi-line flex containers.',
      },
      {
        name: 'align-items',
        selectors: [
          ['.items-stretch', '.items-start', '.items-center', '.items-end', '.items-baeline'],
        ],
        description: '',
      },
      { name: 'align-self', description: '' },
      {
        name: 'justify-content',
        selectors: [
          [
            '.justify-start',
            '.justify-center',
            '.justify-end',
            '.justify-between',
            '.justify-around',
            '.justify-evenly',
          ],
        ],
        description: "Controls how flex items are positioned along container's main axis.",
      },
      {
        name: 'justify-items',
        selectors: [
          [
            '.justify-items-stretch',
            '.justify-items-start',
            '.justify-items-center',
            '.justify-items-end',
          ],
        ],
        description: 'Controls default alignment for items on the inline axis for grids.',
      },
      { name: 'justify-self', description: '' },
      { name: 'place-content', description: '' },
      { name: 'place-items', description: '' },
      { name: 'place-self', description: '' },
    ],
  },
  {
    name: 'Typography',
    selectors: [[groupHover, hover], [focus, focusWithin], breakpoints],
    items: [
      {
        name: 'font-family',
        selectors: ['.font-sans', '.font-serif', '.font-mono'],
        description: 'Sets the font family.',
      },
      {
        name: 'font-size',
        selectors: [
          [
            '.text-xs',
            '.text-sm',
            '.text-base',
            '.text-lg',
            '.text-xl',
            '.text-2xl',
            '.text-3xl',
            '.text-4xl',
            '.text-5xl',
            '.text-6xl',
            '.text-7xl',
            '.text-8xl',
            '.text-9xl',
          ],
        ],
        description: '',
      },
      { name: 'font-smoothing', description: '' },
      { name: 'font-style', selectors: [['.italic', '.not-italic']], description: '' },
      { name: 'font-variant-numeric', description: '' },
      {
        name: 'font-weight',
        selectors: [
          [
            '.font-thin',
            '.font-extralight',
            '.font-light',
            '.font-normal',
            '.font-medium',
            '.font-semibold',
            '.font-bold',
            '.font-extrabold',
            '.font-black',
          ],
        ],
        description: 'Sets the font weight.',
      },
      { name: 'letter-spacing', description: '' },
      {
        name: 'line-height',
        selectors: [
          [
            '.leading-none',
            '.leading-tight',
            '.leading-snug',
            '.leading-normal',
            '.leading-relaxed',
            '.leading-loose',
            '.leading-3',
            '.leading-4',
            '.leading-5',
            '.leading-6',
            '.leading-7',
            '.leading-8',
            '.leading-9',
            '.leading-10',
          ],
        ],
        description: 'Sets the line height.',
      },
      { name: 'list-style-position', description: '' },
      { name: 'list-style-type', description: '' },
      {
        name: 'text color',
        selectors: makeColors('.text-'),
        description: 'Sets the text color.',
      },
      {
        name: 'text opacity',
        selectors: makePercentageValues('.text-opacity-'),
        description: 'Sets text opacity when used with text-[color].',
      },
      {
        name: 'text-align',
        selectors: ['.text-left', '.text-right', '.text-center', '.text-justify'],
        description: 'Sets the alignment of text.',
      },
      {
        name: 'text-decoration',
        selectors: ['.underline', '.line-through', '.no-underline'],
        description: 'Sets the text-decoration of an element.',
      },
      { name: 'text-overflow', description: '' },
      { name: 'text-transform', description: '' },
      { name: 'vertical-align', description: '' },
      { name: 'white-space', selectors: [], description: '' },
      { name: 'word-break', selectors: [], description: '' },
    ],
  },
  {
    name: 'Filter',
    selectors: [breakpoints],
    items: [
      { name: 'backdrop-blur', description: '' },
      { name: 'backdrop-brightness', description: '' },
      { name: 'backdrop-contrast', description: '' },
      { name: 'backdrop-filter', description: '' },
      { name: 'backdrop-grayscale', description: '' },
      { name: 'backdrop-hue-rotate', description: '' },
      { name: 'backdrop-invert', description: '' },
      { name: 'backdrop-opacity', description: '' },
      { name: 'backdrop-saturate', description: '' },
      { name: 'backdrop-sepia', description: '' },
      { name: 'blur', description: '' },
      { name: 'brightness', description: '' },
      { name: 'contrast', description: '' },
      { name: 'drop-shadow', description: '' },
      { name: 'filter', description: '' },
      { name: 'grayscale', description: '' },
      { name: 'hue-rotate', description: '' },
      { name: 'invert', description: '' },
      { name: 'saturate', description: '' },
      { name: 'sepia', description: '' },
    ],
  },
];
