import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '../../../components/Icon';
import { SafeContent } from '../../../components/SafeContent';
import { ScreenContainer } from '../../../components/ScreenContainer';
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
      style={{ marginRight: 16, padding: 8 }}
      onPress={() => navigate('NotificationsScreen')}>
      <Icon name="bell" color="white" />
    </TouchableOpacity>
  );
};
