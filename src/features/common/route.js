// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import List from './List';
import ListContainer from './ListContainer';
import SpringPlayground from './SpringPlayground';

export default {
  path: 'common',
  name: 'Common',
  childRoutes: [
    {path:'list', component:List},
    {path:'listc', component:ListContainer},
    {path:'springs', component:SpringPlayground},
  ],
};
