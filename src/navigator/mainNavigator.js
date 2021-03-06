import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen314052Navigator from '../features/BlankScreen314052/navigator';
import BlankScreen214050Navigator from '../features/BlankScreen214050/navigator';
import BlankScreen014048Navigator from '../features/BlankScreen014048/navigator';
import CopyOfBlankScreen014047Navigator from '../features/CopyOfBlankScreen014047/navigator';
import BlankScreen014045Navigator from '../features/BlankScreen014045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen314052: { screen: BlankScreen314052Navigator },
BlankScreen214050: { screen: BlankScreen214050Navigator },
BlankScreen014048: { screen: BlankScreen014048Navigator },
CopyOfBlankScreen014047: { screen: CopyOfBlankScreen014047Navigator },
BlankScreen014045: { screen: BlankScreen014045Navigator },

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
