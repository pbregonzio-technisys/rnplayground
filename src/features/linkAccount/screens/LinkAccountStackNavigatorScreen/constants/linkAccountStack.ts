import { LinkAccountIndexScreen } from '../screens/LinkAccountIndexScreen';
import { LinkAccountFormScreen } from '../screens/LinkAccountFormScreen';
import { LinkAccountResultScreen } from '../screens/LinkAccountResultScreen';

export const LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS = {
  LinkAccountIndexScreen,
  LinkAccountFormScreen,
  LinkAccountResultScreen,
} as const;

type ParamListTypes = {};

export const LINK_ACCOUNT_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS
) as (keyof typeof LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS)[];

export type LinkAccountStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends LinkAccountStackNavigatorParams {}
  }
}
