import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../../screens/HomeScreen";
import BudgetScreen from "../../screens/BudgetScreen";
import InventoryScreen from "../../screens/InventoryScreen";
import RecipeScreen from "../../screens/RecipeScreen";
import TabNavigator from "./TabNavigator";
import RecipeFullCard from "../../screens/RecipeFullCard";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
    Inventory: InventoryScreen,
    Recipe: RecipeScreen,
    RecipeFull: RecipeFullCard
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(TabNavigator);
