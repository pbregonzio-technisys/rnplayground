import * as React from 'react';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const ChangePasswordIndexScreen = () => (
  <ScreenContainer name="Change password index screen" statusBarScheme="dark" />
);
ChangePasswordIndexScreen.options = {
  title: 'Change password index screen ',
  ...simpleHeaderProps,
};
