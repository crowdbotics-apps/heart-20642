import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings108904Navigator from '../features/Settings108904/navigator';
import Settings108887Navigator from '../features/Settings108887/navigator';
import Settings108870Navigator from '../features/Settings108870/navigator';
import Settings108836Navigator from '../features/Settings108836/navigator';
import Settings108819Navigator from '../features/Settings108819/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings108904: { screen: Settings108904Navigator },
Settings108887: { screen: Settings108887Navigator },
Settings108870: { screen: Settings108870Navigator },
Settings108836: { screen: Settings108836Navigator },
Settings108819: { screen: Settings108819Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
