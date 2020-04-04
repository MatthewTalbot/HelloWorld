import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import AppNavigation from './src/components/Navigation/AppNavigation'

const initialState = {
  action: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
