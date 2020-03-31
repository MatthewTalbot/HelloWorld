import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './src/screens/LoadingScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'

import * as firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBECpMgJNvvY3CQ6mAT_ebM7qagdjHTDbs",
    authDomain: "fridgy-app-f1736.firebaseapp.com",
    databaseURL: "https://fridgy-app-f1736.firebaseio.com",
    projectId: "fridgy-app-f1736",
    storageBucket: "fridgy-app-f1736.appspot.com",
    messagingSenderId: "906891702720",
    appId: "1:906891702720:web:1e7c7ebd62da66c373d825"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const AppStack = createStackNavigator ({
    Home: HomeScreen
  });

  const AuthStack = createStackNavigator ({
    Login: LoginScreen,
    RegisterScreen: RegisterScreen
  });

  export default createAppContainer (
    createSwitchNavigator (
      {
        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack
      },
      {
        initialRouteName: "Loading"
      }
    )
  );
