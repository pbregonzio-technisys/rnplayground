import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../../components/Button';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { AuthContext } from '../../../providers/AuthProvider';

export const WelcomeScreen = () => {
  return (
    <ScreenContainer name="Welcome screen" statusBarScheme="dark">
      <View style={styles.screenView}>
        <LogInButton />
        <ResetPasswordButton />
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
      onPress={() => {
        setIsAuthenticated(true);
        setTimeout(() => navigate('PrivateStackNavigatorScreen'), 300);
      }}>
      Log In
    </Button>
  );
};

const ResetPasswordButton = () => {
  const { navigate } = useNavigation();
  return (
    <Button
      onPress={() => {
        navigate('ResetPasswordStackNavigatorScreen');
      }}>
      Reset Password
    </Button>
  );
};

const styles = StyleSheet.create({
  screenView: {
    marginTop: 200,
    marginHorizontal: 24,
  },
});

export default WelcomeScreen;
