import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../../screens/HomeScreen";
import BudgetScreen from "../../screens/BudgetScreen";
import InventoryScreen from "../../screens/InventoryScreen";
import RecipeScreen from "../../screens/RecipeScreen";
import RecipeFullCard from "../../screens/RecipeFullCard";

import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-home"
      size={20}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const RecipePage = createStackNavigator({
  Recipe: RecipeScreen,
  RecipeFull: RecipeFullCard
});

RecipePage.navigationOptions = {
  tabBarLabel: "Recipes",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-restaurant"
      size={20}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const BudgetPage = createStackNavigator({
  Budget: BudgetScreen
});

BudgetPage.navigationOptions = {
  tabBarLabel: "Budget",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="logo-usd"
      size={20}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const InventoryPage = createStackNavigator({
  Inventory: InventoryScreen
});

InventoryPage.navigationOptions = {
  tabBarLabel: "Inventory",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder-open"
      size={20}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  RecipePage,
  BudgetPage,
  InventoryPage
});

export default TabNavigator;
