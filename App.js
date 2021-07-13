import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStackNavigator = createBottomTabNavigator();

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
        <AppStackNavigator.Screen 
          name="Post"
          component={PostScreen}
        />
        <AppStackNavigator.Screen 
          name="Profil"
          component={ProfilScreen}
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
