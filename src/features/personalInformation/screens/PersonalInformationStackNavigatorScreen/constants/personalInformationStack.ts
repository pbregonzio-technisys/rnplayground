import { PersonalInformationIndexScreen } from '../screens/PersonalInformationIndexScreen';
import { PersonalInformationFormScreen } from '../screens/PersonalInformationFormScreen';
import { PersonalInformationResultScreen } from '../screens/PersonalInformationResultScreen';

export const PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS = {
  PersonalInformationIndexScreen,
  PersonalInformationFormScreen,
  PersonalInformationResultScreen,
} as const;

type ParamListTypes = {};

export const PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREEN_NAMES = Object.keys(
  PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS
) as (keyof typeof PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS)[];

export type PersonalInformationStackNavigatorParams = {
  [Key in Exclude<
    keyof typeof PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS,
    keyof ParamListTypes
  >]: undefined;
} & ParamListTypes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PersonalInformationStackNavigatorParams {}
  }
}
