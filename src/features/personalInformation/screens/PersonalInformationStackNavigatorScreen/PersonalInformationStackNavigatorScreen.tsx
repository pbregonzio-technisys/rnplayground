import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREEN_NAMES,
  PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS,
  PersonalInformationStackNavigatorParams,
} from './constants/personalInformationStack';

const Stack = createStackNavigator<PersonalInformationStackNavigatorParams>();

export const PersonalInformationStackNavigatorScreen = () => (
  <Stack.Navigator>
    {PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
      <Stack.Screen
        key={name}
        name={name}
        component={PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS[name]}
        options={PERSONAL_INFORMATION_STACK_NAVIGATOR_SCREENS[name].options}
      />
    ))}
  </Stack.Navigator>
);

PersonalInformationStackNavigatorScreen.options = {
  title: 'Personal information stack navigator screen',
  headerShown: false,
};
