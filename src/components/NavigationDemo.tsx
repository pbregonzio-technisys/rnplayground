import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../constants/navigation/privateStack';
import { BOTTOM_TABS_NAVIGATOR_SCREENS } from '../constants/navigation/bottomTab';

export const NavigationDemo = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <>
      <Button
        onPress={() =>
          navigate(PRIVATE_STACK_NAVIGATOR_SCREENS.FeedbackScreen.name)
        }>
        Go to Feedback screen
      </Button>
      <Button onPress={() => goBack()}>Go back</Button>

      <Button
        onPress={() =>
          navigate(PRIVATE_STACK_NAVIGATOR_SCREENS.NotificationsScreen.name)
        }>
        Go to Navigation
      </Button>
      <Button
        onPress={() =>
          navigate(BOTTOM_TABS_NAVIGATOR_SCREENS.OverviewScreen.name)
        }>
        Go to Overview
      </Button>
      <Button
        onPress={() =>
          navigate(BOTTOM_TABS_NAVIGATOR_SCREENS.AccountsScreen.name, {
            accountId: 21,
          })
        }>
        Go to Accounts screen
      </Button>
    </>
  );
};

const Button = ({ onPress, children }: any) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonLabel}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 12, backgroundColor: 'rebeccapurple', marginVertical: 8 },
  buttonLabel: { fontSize: 16, textAlign: 'center', color: 'white' },
});
