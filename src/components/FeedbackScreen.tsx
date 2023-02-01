import * as React from 'react';
import { simpleHeaderProps } from '../constants/navigation/utils';
import { ScreenContainer } from './ScreenContainer';

export const FeedbackScreen = () => (
  <ScreenContainer name="Feedback screen" statusBarScheme="dark" />
);
FeedbackScreen.options = {
  title: 'Feedback screen',
  ...simpleHeaderProps,
};
