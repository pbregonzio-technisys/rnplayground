import * as React from 'react';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ResetPasswordResultScreen = () => (
  <ScreenContainer name="Reset Password result screen" statusBarScheme="dark" />
);
ResetPasswordResultScreen.options = {
  title: 'Reset Password result screen',
  ...simpleHeaderProps,
};
