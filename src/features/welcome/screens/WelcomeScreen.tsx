import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components/Button/Button';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { BOTTOM_TABS_NAVIGATOR_SCREENS } from '../../../constants/navigation/bottomTab';
import { PUBLIC_STACK_NAVIGATOR_SCREENS } from '../../../constants/navigation/publicStack';
import { AuthContext } from '../../../providers/AuthProvider';
import { BottomSheet } from '../../../components/BottomSheet/BottomSheet';
import { useTranslation } from 'react-i18next';

export const WelcomeScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const { t } = useTranslation();

  return (
    <ScreenContainer name="Welcome screen" statusBarScheme="dark">
      <View style={styles.screenView} testID="welcome">
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <View style={{ flex: 1 }}>
            <Text>{t('title')}</Text>
          </View>
          <Button
            type="secondary"
            size="small"
            onPress={() => setVisible(true)}
            accessibilityLabel="Select your prefered language">
            EN
          </Button>
        </View>
        <LogInButton />
        <ResetPasswordButton />
      </View>
      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Select your prefered language"
      />
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
    gap: 16,
  },
});

export default WelcomeScreen;
