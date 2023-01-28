import * as React from 'react';
import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const LinkAccountFormScreen = () => (
  <ScreenContainer name="Link Account form screen" statusBarScheme="dark" />
);
LinkAccountFormScreen.options = {
  title: 'Link Account form screen',
  ...simpleHeaderProps,
};
