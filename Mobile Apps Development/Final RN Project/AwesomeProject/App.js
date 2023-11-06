import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

// Components...!
import Home from './src/components/home/home';
import About from './src/components/about/about';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
        <Screen name='About' component={About} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;