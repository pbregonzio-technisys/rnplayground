import * as React from 'react';
import { StyleSheet } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '../providers/AuthProvider';
import en from '../assets/locales/en.json';

export const defaultNS = 'translation';

export const languages = {
  en: 'en',
};

export const resources = {
  [languages.en]: {
    translation: en,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'translation',
  fallbackLng: 'en',
  react: {
    useSuspense: true,
  },
});

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
