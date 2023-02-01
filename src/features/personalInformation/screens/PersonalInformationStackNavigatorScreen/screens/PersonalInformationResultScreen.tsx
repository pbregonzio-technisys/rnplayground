import * as React from 'react';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const PersonalInformationResultScreen = () => (
  <ScreenContainer
    name="Personal Information result screen"
    statusBarScheme="dark"
  />
);
PersonalInformationResultScreen.options = {
  title: 'Personal Information result screen',
  ...simpleHeaderProps,
};
