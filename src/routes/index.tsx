import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import AddNewTask from '../pages/AddNewTask';
import Search from '../pages/Search';

export type RootStackParamList = {
  Home: undefined;
  AddNewTask: undefined;
  Search: undefined;
};

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default Routes;
