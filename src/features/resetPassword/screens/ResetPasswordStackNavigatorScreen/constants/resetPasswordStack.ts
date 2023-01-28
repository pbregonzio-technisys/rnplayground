import { ResetPasswordIndexScreen } from '../screens/ResetPasswordIndexScreen';
import { ResetPasswordFormScreen } from '../screens/ResetPasswordFormScreen';
import { ResetPasswordResultScreen } from '../screens/ResetPasswordResultScreen';

export const RESET_PASSWORD_STACK_NAVIGATOR_SCREENS = {
  ResetPasswordIndexScreen,
  ResetPasswordFormScreen,
  ResetPasswordResultScreen,
} as const;

type ParamListTypes = {};

export const RESET_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  RESET_PASSWORD_STACK_NAVIGATOR_SCREENS
) as (keyof typeof RESET_PASSWORD_STACK_NAVIGATOR_SCREENS)[];

export type ResetPasswordStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof RESET_PASSWORD_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ResetPasswordStackNavigatorParams {}
  }
}
