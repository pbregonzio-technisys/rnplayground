import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenContainer } from '../../../components/ScreenContainer';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { SafeContent } from '../../../components/SafeContent';
import { SegmentedControl } from '../../../components/SegmentedControl/SegmentedControl';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppBarActionButton } from '../../../components/AppBarActionButton';

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
    <AppBarActionButton
      onPress={goBack}
      styles={{ wrapper: styles.actionButton }}
      iconName="left-arrow"
      accessibilityLabel="go back"
    />
  );
};

const styles = StyleSheet.create({
  actionButton: { marginLeft: 16 },
});
