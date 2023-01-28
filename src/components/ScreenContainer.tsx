import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FocusAwareStatusBar } from './FocusAwareStatusBar';

export const ScreenContainer = ({ statusBarScheme, children }: any) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle={statusBarScheme === 'dark' ? 'dark-content' : 'light-content'}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
