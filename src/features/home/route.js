import { WelcomePage } from './';
import BlocklyTest from '../blockly/BlocklyTest';

export default {
  path: '',
  childRoutes: [
    {
      path: 'welcome-page',
      component: WelcomePage,
      isIndex: true,
    },
  
  ],
};
