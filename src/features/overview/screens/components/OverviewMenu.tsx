import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../../components/Button';

export const OverviewMenu = () => {
  const { navigate } = useNavigation();
  return (
    <Button onPress={() => navigate('LinkAccountStackNavigatorScreen')}>
      Link account
    </Button>
  );
};

// crear tareas para modularizar PS
// quitar las tareas del la epica
