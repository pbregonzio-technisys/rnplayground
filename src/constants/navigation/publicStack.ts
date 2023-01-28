import { ResetPasswordStackNavigatorScreen } from '../../features/resetPassword/screens/ResetPasswordStackNavigatorScreen';

export const PUBLIC_STACK_NAVIGATOR_SCREENS = {
  ResetPasswordStackNavigatorScreen,
} as const;

type ParamListTypes = {
  WelcomeScreen: undefined;
  PublicStackNavigatorScreen: undefined;
};

export const PUBLIC_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  PUBLIC_STACK_NAVIGATOR_SCREENS
) as (keyof typeof PUBLIC_STACK_NAVIGATOR_SCREENS)[];

export type PublicStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof PUBLIC_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PublicStackNavigatorParams {}
  }
}
