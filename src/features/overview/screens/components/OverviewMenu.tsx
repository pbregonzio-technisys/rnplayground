import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../../components/Button';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../../../../constants/navigation/privateStack';

export const OverviewMenu = () => {
  const { navigate } = useNavigation();
  return (
    <Button
      onPress={() =>
        navigate(
          PRIVATE_STACK_NAVIGATOR_SCREENS.LinkAccountStackNavigatorScreen.name
        )
      }>
      Link account
    </Button>
  );
};

// crear tareas para modularizar PS
// quitar las tareas del la epica
