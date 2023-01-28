import * as React from 'react';
import { ScreenContainer } from './ScreenContainer';
import { simpleHeaderProps } from '../constants/navigation/utils';

export const FeedbackScreen = () => (
  <ScreenContainer name="Feedback screen" statusBarScheme="dark" />
);
FeedbackScreen.options = {
  title: 'Feedback screen',
  ...simpleHeaderProps,
};
