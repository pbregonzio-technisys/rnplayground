import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from './Button/Button';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../constants/navigation/privateStack';
import { BOTTOM_TABS_NAVIGATOR_SCREENS } from '../constants/navigation/bottomTab';

export const NavigationDemo = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <>
      <Button
        onPress={() =>
          navigate(PRIVATE_STACK_NAVIGATOR_SCREENS.FeedbackScreen.name as any)
        }>
        Go to Feedback screen
      </Button>
      <Button onPress={() => goBack()}>Go back</Button>

      <Button
        onPress={() =>
          navigate(
            PRIVATE_STACK_NAVIGATOR_SCREENS.NotificationsScreen.name as any
          )
        }>
        Go to Navigation
      </Button>
      <Button
        onPress={() =>
          navigate(BOTTOM_TABS_NAVIGATOR_SCREENS.OverviewScreen.name as any)
        }>
        Go to Overview
      </Button>
      <Button
        onPress={() =>
          navigate(BOTTOM_TABS_NAVIGATOR_SCREENS.AccountsScreen.name as any, {
            accountId: 21,
          })
        }>
        Go to Accounts screen
      </Button>
    </>
  );
};
