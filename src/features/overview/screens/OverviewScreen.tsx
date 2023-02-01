import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon } from '../../../components/Icon';
import { SafeContent } from '../../../components/SafeContent';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../../../constants/navigation/privateStack';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { OverviewMenu } from './components/OverviewMenu';

export const OverviewScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer statusBarScheme="light">
      <SafeContent
        outerMargin={{
          paddingTop: 16,
          paddingBottom: 24,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
        }}>
        <OverviewMenu />
      </SafeContent>
    </ScreenContainer>
  );
};

OverviewScreen.options = {
  ...colorfulHeaderProps,
  ...tabBarProps,
  title: 'Overview screen',
  tabBarLabel: 'Overview',
  headerRight: () => <NotificationActionIcon />,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="bank" color={focused ? '#E36414' : '#757575'} />
  ),
};

const NotificationActionIcon = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={() =>
        navigate(
          PRIVATE_STACK_NAVIGATOR_SCREENS.NotificationsScreen.name as any
        )
      }>
      <Icon name="bell" color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: { marginRight: 16, padding: 8 },
});
