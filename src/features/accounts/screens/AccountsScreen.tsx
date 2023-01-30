import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
    <TouchableOpacity
      style={styles.actionButton}
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

const styles = StyleSheet.create({
  actionButton: { marginRight: 24, padding: 8 },
});
