import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../../screens/HomeScreen";
import BudgetScreen from "../../screens/BudgetScreen";
import InventoryScreen from "../../screens/InventoryScreen";
import RecipeScreen from "../../screens/RecipeScreen";
import TabNavigator from "./TabNavigator";
import RecipeFullCard from "../../screens/RecipeFullCard";
import RecipeTest from "../Recipe/RecipeTest";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
    Inventory: InventoryScreen,
    Recipe: RecipeScreen,
    RecipeComponent: RecipeTest,
    RecipeFull: RecipeFullCard,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(TabNavigator);
