import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Home from '../pages/Home';
import AddNewTask from '../pages/AddNewTask';
import Search from '../pages/Search';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

export type TRootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AddNewTask: undefined;
  Search: undefined;
};

const Routes = () => {
  const Stack = createNativeStackNavigator();

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  if (!isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }

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
