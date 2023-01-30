import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { AuthProvider } from '../providers/AuthProvider';

export const ProvidersSet = ({ children }: { children: React.ReactNode }) => (
  <GestureHandlerRootView style={styles.root}>
    <AuthProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </AuthProvider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  root: { flex: 1 },
});
