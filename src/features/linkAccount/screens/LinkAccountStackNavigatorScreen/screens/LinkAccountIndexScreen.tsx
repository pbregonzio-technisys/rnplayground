import * as React from 'react';
import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const LinkAccountIndexScreen = () => (
  <ScreenContainer name="Link Account index screen" statusBarScheme="dark" />
);
LinkAccountIndexScreen.options = {
  title: 'Link Account index screen ',
  ...simpleHeaderProps,
};
