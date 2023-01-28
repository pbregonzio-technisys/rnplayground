import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../../../components/ScreenContainer';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { Icon } from '../../../components/Icon';

export const NotificationsScreen = () => {
  return <ScreenContainer statusBarScheme="light" />;
};

NotificationsScreen.options = {
  ...colorfulHeaderProps,
  ...tabBarProps,
  title: 'Notifications screen',
  headerLeft: () => <BackActionIcon />,
};

const BackActionIcon = () => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginLeft: 16, padding: 8 }}
      onPress={goBack}
      accessibilityLabel="go back">
      <Icon name="left-arrow" color="white" />
    </TouchableOpacity>
  );
};
