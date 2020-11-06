import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014049Navigator from '../features/CopyOfBlankScreen014049/navigator';
import BlankScreen014048Navigator from '../features/BlankScreen014048/navigator';
import CopyOfBlankScreen014047Navigator from '../features/CopyOfBlankScreen014047/navigator';
import BlankScreen014045Navigator from '../features/BlankScreen014045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014049: { screen: CopyOfBlankScreen014049Navigator },
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
