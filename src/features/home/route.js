import { WelcomePage } from './';
import BlocklyTest from '../blockly/BlocklyTest';
import Test from './Test';

export default {
  path: '',
  childRoutes: [
    {
      path: 'welcome-page',
      component: WelcomePage,
      isIndex: true,
    },
    {
      path: 'test',
      component: Test,
    },
  ],
};
