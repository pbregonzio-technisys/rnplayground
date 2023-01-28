import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { ScreenContainer } from '../../../components/ScreenContainer';
import { Icon } from '../../../components/Icon';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';

export const AccountsScreen = ({
  route,
}: {
  route: { params: AccountsScreenParams };
}) => {
  const { params } = route;

  return (
    <ScreenContainer
      name={`Accounts screen ${params?.accountId || ''}`}
      statusBarScheme="light"
    />
  );
};

AccountsScreen.options = {
  ...colorfulHeaderProps,
  ...tabBarProps,
  title: 'Accounts screen',
  tabBarLabel: 'Accounts',
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 24, padding: 8 }}
      accessibilityLabel="More actions">
      <Icon name="vertical-ellipsis" />
    </TouchableOpacity>
  ),
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="wallet" color={focused ? '#E36414' : '#757575'} />
  ),
};

type AccountsScreenParams = {
  accountId?: number;
};

export type AccountsScreenParamsType = {
  AccountsScreen: AccountsScreenParams | undefined;
};
