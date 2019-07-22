import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator({
  Tabs: { screen: TabNavigation, navigationOptions: { title: "title" } },
  Detail: DetailScreen
},
  {}
);

export default createAppContainer(MainNavigation);
