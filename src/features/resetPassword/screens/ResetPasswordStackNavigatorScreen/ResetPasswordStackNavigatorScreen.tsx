import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  RESET_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES,
  RESET_PASSWORD_STACK_NAVIGATOR_SCREENS,
  ResetPasswordStackNavigatorParams,
} from './constants/resetPasswordStack';

const Stack = createStackNavigator<ResetPasswordStackNavigatorParams>();

export const ResetPasswordStackNavigatorScreen = () => (
  <Stack.Navigator>
    {RESET_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
      <Stack.Screen
        key={name}
        name={name}
        component={RESET_PASSWORD_STACK_NAVIGATOR_SCREENS[name]}
        options={RESET_PASSWORD_STACK_NAVIGATOR_SCREENS[name].options}
      />
    ))}
  </Stack.Navigator>
);

ResetPasswordStackNavigatorScreen.options = {
  title: 'Reset password stack navigator screen',
  headerShown: false,
};
