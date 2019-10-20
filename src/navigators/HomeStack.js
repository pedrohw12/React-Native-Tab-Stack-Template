import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home/Home';
import Perfil from '../screens/perfil/Perfil';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Perfil: {
    screen: Perfil
  },
});

export default HomeStack;