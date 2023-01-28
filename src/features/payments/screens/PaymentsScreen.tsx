import * as React from 'react';

import { ScreenContainer } from '../../../components/ScreenContainer';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { Icon } from '../../../components/Icon';

export const PaymentsScreen = () => (
  <ScreenContainer name="Payments screen" statusBarScheme="light" />
);
PaymentsScreen.options = {
  ...tabBarProps,
  ...colorfulHeaderProps,
  title: 'Payments screen',
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="dollar" color={focused ? '#E36414' : '#757575'} />
  ),
};
