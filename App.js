import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Homepage';
import ProductDetails from './ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
