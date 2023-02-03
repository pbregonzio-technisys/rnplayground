import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ScreenContainer } from '../../../components/ScreenContainer';
import { Icon } from '../../../components/Icon';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { AppBarActionButton } from '../../../components/AppBarActionButton';

export const AccountsScreen = ({
  route,
}: {
  route: { params: AccountsScreenParams };
}) => {
  const { params } = route;

  return (
    <ScreenContainer statusBarScheme="light">
      <Text>{params?.accountId || ''}</Text>
    </ScreenContainer>
  );
};

AccountsScreen.options = {
  ...colorfulHeaderProps,
  ...tabBarProps,
  title: 'Accounts screen',
  tabBarLabel: 'Accounts',
  headerRight: () => (
    <AppBarActionButton
      styles={{ wrapper: styles.actionButton }}
      iconName="vertical-ellipsis"
      accessibilityLabel="More actions"
    />
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

const styles = StyleSheet.create({
  actionButton: { marginRight: 24 },
});
