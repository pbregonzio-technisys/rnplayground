import * as React from 'react';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ResetPasswordFormScreen = () => (
  <ScreenContainer name="Reset Password form screen" statusBarScheme="dark" />
);
ResetPasswordFormScreen.options = {
  title: 'Reset Password form screen',
  ...simpleHeaderProps,
};
