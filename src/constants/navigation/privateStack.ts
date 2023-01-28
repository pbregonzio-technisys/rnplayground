import { FeedbackScreen } from '../../components/FeedbackScreen';
import { NotificationsScreen } from '../../features/notifications/screens/NotificationsScreen';
import { PersonalInformationStackNavigatorScreen } from '../../features/personalInformation/screens/PersonalInformationStackNavigatorScreen';
import { ChangePasswordStackNavigatorScreen } from '../../features/changePassword/screens/ChangePasswordStackNavigatorScreen';
import { LinkAccountStackNavigatorScreen } from '../../features/linkAccount/screens/LinkAccountStackNavigatorScreen';

export const PRIVATE_STACK_NAVIGATOR_SCREENS = {
  FeedbackScreen,
  NotificationsScreen,
  PersonalInformationStackNavigatorScreen,
  ChangePasswordStackNavigatorScreen,
  LinkAccountStackNavigatorScreen,
} as const;

type ParamListTypes = {
  PrivateStackNavigatorScreen: undefined;
};

export const PRIVATE_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  PRIVATE_STACK_NAVIGATOR_SCREENS
) as (keyof typeof PRIVATE_STACK_NAVIGATOR_SCREENS)[];

export type PrivateStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof PRIVATE_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PrivateStackNavigatorParams {}
  }
}
