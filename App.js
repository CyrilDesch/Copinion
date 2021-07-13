import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStackNavigator = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStackNavigator.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
      >
        <AppStackNavigator.Screen 
          name="Home"
          component={HomeScreen}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return(
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};
