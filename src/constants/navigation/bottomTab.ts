import { PaymentsScreen } from '../../features/payments/screens/PaymentsScreen';
import {
  AccountsScreen,
  AccountsScreenParamsType,
} from '../../features/accounts/screens/AccountsScreen';
import { OverviewScreen } from '../../features/overview/screens/OverviewScreen';

export const BOTTOM_TABS_NAVIGATOR_SCREENS = {
  OverviewScreen,
  AccountsScreen,
  PaymentsScreen,
} as const;

type ParamListTypes = AccountsScreenParamsType;

export const BOTTOM_TABS_NAVIGATOR_SCREEN_NAMES = Object.keys(
  BOTTOM_TABS_NAVIGATOR_SCREENS
) as (keyof typeof BOTTOM_TABS_NAVIGATOR_SCREENS)[];

export type BottomTabsNavigatorParams = {
  [Key in Exclude<
    keyof typeof BOTTOM_TABS_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabsNavigatorParams {}
  }
}
