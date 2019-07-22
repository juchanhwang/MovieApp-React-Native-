import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStlyes } from "./config";

const MainNavigation = createStackNavigator({
  Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      ...headerStlyes
    }
  }
},
  {}
);

export default createAppContainer(MainNavigation);
