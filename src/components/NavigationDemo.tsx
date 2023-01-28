import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const NavigationDemo = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <>
      <Button onPress={() => navigate('FeedbackScreen')}>
        Go to Feedback screen
      </Button>
      <Button onPress={() => goBack()}>Go back</Button>
      <Button onPress={() => navigate('OverviewStackNavigatorScreen')}>
        Go to Overview index stack
      </Button>
      <Button onPress={() => navigate('AccountsScreen', { accountId: 21 })}>
        Go to Overview index stack
      </Button>
      <Button onPress={() => navigate('OverviewIndexScreen')}>
        Go to Overview index screen
      </Button>
      <Button onPress={() => navigate('OverviewFormScreen')}>
        Go to Overview form screen
      </Button>
      <Button onPress={() => navigate('OverviewResultScreen')}>
        Go to Overview result screen
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
