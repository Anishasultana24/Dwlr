import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Landing from './component/Landing'
import DWLRs from './component/DWLRs';

import Report from './component/Report';
import Dashboard from './component/Dashboard';
import Alerts from './component/Alerts';
import Predict from './component/Predict';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="DWLRs" component={DWLRs} options={{ headerShown: false }} />
      <Stack.Screen name="Alerts" component={Alerts} options={{ headerShown: false }} />
      <Stack.Screen name="Report" component={Report} options={{ headerShown: false }} />
      <Stack.Screen name="Predict" component={Predict} options={{ headerShown: false }} />
   
      
      
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default App