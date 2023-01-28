import { PaySomeoneScreen } from '../../features/paySomeone/screens/PaySomeoneScreen';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';

export const DRAWER_NAVIGATOR_SCREENS = {
  PaySomeoneScreen,
  ProfileScreen,
} as const;

type ParamListTypes = {
  DrawerNavigatorScreen: undefined;
};

export const DRAWER_NAVIGATOR_SCREEN_NAMES = Object.keys(
  DRAWER_NAVIGATOR_SCREENS
) as (keyof typeof DRAWER_NAVIGATOR_SCREENS)[];

export type DrawerNavigatorParams = {
  [Key in Exclude<
    keyof typeof DRAWER_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DrawerNavigatorParams {}
  }
}
