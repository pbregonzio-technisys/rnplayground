import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LINK_ACCOUNT_STACK_NAVIGATOR_SCREEN_NAMES,
  LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS,
  LinkAccountStackNavigatorParams,
} from './constants/linkAccountStack';

const Stack = createStackNavigator<LinkAccountStackNavigatorParams>();

export const LinkAccountStackNavigatorScreen = () => (
  <Stack.Navigator>
    {LINK_ACCOUNT_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
      <Stack.Screen
        key={name}
        name={name}
        component={LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS[name]}
        options={LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS[name].options}
      />
    ))}
  </Stack.Navigator>
);

LinkAccountStackNavigatorScreen.options = {
  title: 'Link account stack navigator screen',
  headerShown: false,
};
