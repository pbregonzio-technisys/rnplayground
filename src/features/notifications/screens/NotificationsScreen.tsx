import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenContainer } from '../../../components/ScreenContainer';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { Icon } from '../../../components/Icon';
import { SafeContent } from '../../../components/SafeContent';
import { SegmentedControl } from '../../../components/SegmentedControl/SegmentedControl';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const NotificationsScreen = () => {
  const [_, setSelectedValue] = React.useState('Insights');
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer statusBarScheme="light">
      <SafeContent
        style={{
          paddingTop: 16,
          paddingBottom: 24 + insets.bottom,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
        }}>
        <SegmentedControl
          labels={['Insights', 'Alerts']}
          onChange={(value) => setSelectedValue(value)}
        />
      </SafeContent>
    </ScreenContainer>
  );
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
      style={styles.actionButton}
      onPress={goBack}
      accessibilityLabel="go back">
      <Icon name="left-arrow" color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: { marginLeft: 16, padding: 8 },
});
