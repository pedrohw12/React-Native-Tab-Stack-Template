import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/login/Login';
import HomeTab from './HomeTab';

const MainStack = createStackNavigator({
  Login: {
    screen: Login
  },
  HomeTab: {
    screen: HomeTab
  },
},{
  defaultNavigationOptions: {
    header: null,
  }
});

export default MainStack;