// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  themes: [
    {
      name: 'happy',
      components: [
        // All
        {
          classNames: {
            // areas
            headline: '', // at the top
            content: '', // the main content
            header: '', // topmost main content (card title, table fields)
            'header-label': '', // label that sits above / over the column headers
            // header-#field name#: '',
            footer: '', // icons
            'icons-container': '',
            // icon-#name#
            icon: '', // the whole icon
            'icon-label': '',
            baseline: '', // under the table

            // text
            h1: '',
            h2: '',
            h3: '',
            h4: '',
            h5: '',
            h6: '',
            body1: '',
            body2: '',
            paragraph: '',

            //colors
            primary: '',
            secondary: '',
            accent: '',
            
          },
        },
        // UrbList
        {
          name: 'UrbList',
          classNames: {
            headline: '', // above the table
            content: '', // the main table
            header: '', // column titles
            'header-label': '', // label that sits above / over the column headers
            // header-#field name#: '',
            data: '', // all the data
            'row-item': '',
            'data-item': '', // any item of data
            'data-#field name#': '', // the data of a field
            col: '', // the title and the data
            // col-#field name#: '',
            'pagination-row': '',
            footer: '', // icons
            'icons-container': '',
            // icon-#name#
            icon: '', // the whole icon
            'icon-label': '',
            baseline: '', // under the table
          },
        },
      ],
    },
  ],
};

export default initialState;
