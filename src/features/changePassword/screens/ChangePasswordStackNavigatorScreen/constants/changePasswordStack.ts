import { ChangePasswordIndexScreen } from '../screens/ChangePasswordIndexScreen';
import { ChangePasswordFormScreen } from '../screens/ChangePasswordFormScreen';
import { ChangePasswordResultScreen } from '../screens/ChangePasswordResultScreen';

export const CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS = {
  ChangePasswordIndexScreen,
  ChangePasswordFormScreen,
  ChangePasswordResultScreen,
} as const;

type ParamListTypes = {};

export const CHANGE_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS
) as (keyof typeof CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS)[];

export type ChangePasswordStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ChangePasswordStackNavigatorParams {}
  }
}
