import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import Home from '../Screens/Home/Home';
import {useSelector} from 'react-redux';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';

const Stack = createStackNavigator();

const StackNaviation = () => {
  const {rememberme} = useSelector(state => state.todos);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={rememberme ? 'Home' : 'SignUp'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNaviation;
