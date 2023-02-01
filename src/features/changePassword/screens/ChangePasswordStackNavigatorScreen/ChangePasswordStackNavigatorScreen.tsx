import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CHANGE_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES,
  CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS,
  ChangePasswordStackNavigatorParams,
} from './constants/changePasswordStack';

const Stack = createStackNavigator<ChangePasswordStackNavigatorParams>();

export const ChangePasswordStackNavigatorScreen = () => (
  <Stack.Navigator>
    {CHANGE_PASSWORD_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
      <Stack.Screen
        key={name}
        name={name}
        component={CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS[name]}
        options={CHANGE_PASSWORD_STACK_NAVIGATOR_SCREENS[name].options}
      />
    ))}
  </Stack.Navigator>
);

ChangePasswordStackNavigatorScreen.options = {
  title: 'Change password stack navigator screen',
  headerShown: false,
};
