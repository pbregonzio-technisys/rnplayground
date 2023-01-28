import * as React from 'react';
import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ResetPasswordIndexScreen = () => (
  <ScreenContainer name="Reset Password index screen" statusBarScheme="dark" />
);
ResetPasswordIndexScreen.options = {
  title: 'Reset Password index screen ',
  ...simpleHeaderProps,
};
