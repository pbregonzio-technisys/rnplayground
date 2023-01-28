import * as React from 'react';

import { ScreenContainer } from '../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../constants/navigation/utils';
import { Icon } from '../../../components/Icon';

export const PaySomeoneScreen = () => (
  <ScreenContainer name="PaySomeone screen" statusBarScheme="dark" />
);
PaySomeoneScreen.options = {
  title: 'Pay Someone screen',
  drawerLabel: 'Pay Someone',
  drawerIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="coin-pile" color={focused ? '#E36414' : '#757575'} />
  ),
  ...simpleHeaderProps,
};
