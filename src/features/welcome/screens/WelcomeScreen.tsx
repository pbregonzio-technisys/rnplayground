import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { Button } from '../../../components/Button/Button';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { BOTTOM_TABS_NAVIGATOR_SCREENS } from '../../../constants/navigation/bottomTab';
import { PUBLIC_STACK_NAVIGATOR_SCREENS } from '../../../constants/navigation/publicStack';
import { AuthContext } from '../../../providers/AuthProvider';
import { SegmentedControl } from '../../../components/SegmentedControl/SegmentedControl';

export const WelcomeScreen = () => {
  const [_, setSelectedValue] = React.useState('One');

  return (
    <ScreenContainer name="Welcome screen" statusBarScheme="dark">
      <View style={styles.screenView} testID="welcome">
        <View style={styles.marginBottom}>
          <SegmentedControl
            labels={['One', 'Two', 'Three']}
            onChange={(value) => setSelectedValue(value)}
          />
        </View>
        <View style={styles.marginBottom}>
          <LogInButton />
        </View>
        <View>
          <ResetPasswordButton />
        </View>
      </View>
    </ScreenContainer>
  );
};

WelcomeScreen.options = {
  title: 'Welcome screen',
  header: () => null,
};

export const WelcomeScreenOptions = {
  title: 'Welcome screen',
  header: () => null,
};

const LogInButton = () => {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const { navigate } = useNavigation();
  return (
    <Button
      type="primary"
      disabled
      onPress={() => {
        setIsAuthenticated(true);
        setTimeout(
          () =>
            navigate(BOTTOM_TABS_NAVIGATOR_SCREENS.OverviewScreen.name as any),
          300
        );
      }}>
      Log In
    </Button>
  );
};

const ResetPasswordButton = () => {
  const { navigate } = useNavigation();
  return (
    <Button
      type="terteary"
      disabled
      onPress={() => {
        navigate(
          PUBLIC_STACK_NAVIGATOR_SCREENS.ResetPasswordStackNavigatorScreen
            .name as any
        );
      }}>
      Reset Password
    </Button>
  );
};

const styles = StyleSheet.create({
  screenView: {
    marginTop: 120,
    marginHorizontal: 24,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default WelcomeScreen;
