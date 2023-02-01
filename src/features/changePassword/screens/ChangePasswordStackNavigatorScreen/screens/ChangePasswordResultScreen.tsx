import * as React from 'react';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ChangePasswordResultScreen = () => (
  <ScreenContainer
    name="Change password result screen"
    statusBarScheme="dark"
  />
);
ChangePasswordResultScreen.options = {
  title: 'Change password result screen',
  ...simpleHeaderProps,
};
