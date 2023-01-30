import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../../components/Button';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../../../../constants/navigation/privateStack';
import { LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS } from '../../../linkAccount/screens/LinkAccountStackNavigatorScreen/constants/linkAccountStack';

export const OverviewMenu = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Button
        onPress={() =>
          navigate(
            PRIVATE_STACK_NAVIGATOR_SCREENS.LinkAccountStackNavigatorScreen
              .name as any
          )
        }>
        Link account
      </Button>
      <Button
        onPress={() =>
          navigate(
            PRIVATE_STACK_NAVIGATOR_SCREENS.LinkAccountStackNavigatorScreen
              .name as any,
            {
              screen:
                LINK_ACCOUNT_STACK_NAVIGATOR_SCREENS.LinkAccountIndexScreen
                  .name,
            }
          )
        }>
        Link account dependency graph
      </Button>
    </>
  );
};

// crear tareas para modularizar PS
// quitar las tareas del la epica
