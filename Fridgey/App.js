import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import BudgetScreen from './src/screens/BudgetScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import RecipeScreen from './src/screens/RecipeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
    Inventory: InventoryScreen,
    Recipe: RecipeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

