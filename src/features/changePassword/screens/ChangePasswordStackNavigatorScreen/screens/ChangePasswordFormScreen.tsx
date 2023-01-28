import * as React from 'react';
import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ChangePasswordFormScreen = () => (
  <ScreenContainer name="Change password form screen" statusBarScheme="dark" />
);
ChangePasswordFormScreen.options = {
  title: 'Change password form screen',
  ...simpleHeaderProps,
};
