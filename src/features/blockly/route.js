// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import WelcomePage from './WelcomePage';

export default {
  path: 'blockly',
  childRoutes: [
    {
      path: '',
      component: WelcomePage,
    },
  ],
};
