import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Homepage from '../Homepage';
import ProductDetails from '../ProductDetails';

const HomePageStack = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen
          name='HomePage'
          component={Homepage}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
        />
    </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default HomePageStack