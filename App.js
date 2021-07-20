import React, { useEffect, useState }  from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './src/screens/Tab/HomeScreen';
import PostScreen from './src/screens/Tab/PostScreen';
import ProfilScreen from './src/screens/Tab/ProfilScreen';
import PostWorkScreen from './src/screens/PostWorkScreen';
import ShowWorkScreen from './src/screens/ShowWorkScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';

const AppStackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();
const AuthNavigator = createBottomTabNavigator();

const Tab = () => {
  return(
    <TabNavigator.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: wp(5),
          width: wp(60),
          left: wp(20),
          right: wp(20),
          height: wp(20),
          backgroundColor: 'white',
          elevation: 20,
          borderColor: "white",
          borderWidth: 5,
          borderRadius: wp(5)
        }
      }}
    >
      <TabNavigator.Screen 
        name="Home"
        component={HomeScreen}
      />
      <TabNavigator.Screen 
        name="Post"
        component={PostScreen}
      />
      <TabNavigator.Screen 
        name="Profil"
        component={ProfilScreen}
      />
    </TabNavigator.Navigator>
  );
}

const Auth = () => {
  return(
    <AuthNavigator.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: wp(5),
          width: wp(60),
          left: wp(20),
          right: wp(20),
          height: wp(20),
          backgroundColor: 'white',
          elevation: 20,
          borderColor: "white",
          borderWidth: 5,
          borderRadius: wp(5)
        }
      }}
    >
      <AuthNavigator.Screen 
        name="Home"
        component={HomeScreen}
      />
      <AuthNavigator.Screen 
        name="Post"
        component={PostScreen}
      />
    </AuthNavigator.Navigator>
  );
}


const App = () => {
  return(
    <NavigationContainer>
      <AppStackNavigator.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
      >
        <AppStackNavigator.Screen
          name="Tab"
          component={Tab}
        />
        <AppStackNavigator.Screen
          name="Auth"
          component={Auth}
        />
        <AppStackNavigator.Screen
          name="PostWork"
          component={PostWorkScreen}
        />
        <AppStackNavigator.Screen
          name="ShowWork"
          component={ShowWorkScreen}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    if (auth().currentUser == null) {
      try {
        auth().signInAnonymously();
      } catch (err) {
        setError(err);
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [user]);

  if(error != '')
    return (
      <View>
        <Text>Une erreur est survenue, veuillez réessayer plus tard</Text>
        <Text>{error}</Text>
      </View>
    );

  if(auth().currentUser == null)
    return (
      <View>
        <Text>En attente de connexion</Text>
      </View>
    );

  return(
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};
