import * as React from 'react';

import { ScreenContainer } from '../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../constants/navigation/utils';
import { SafeContent } from '../../../components/SafeContent';
import { Icon } from '../../../components/Icon';
import { ProfileMenu } from './components/ProfileMenu';

export const ProfileScreen = () => {
  return (
    <ScreenContainer statusBarScheme="dark">
      <SafeContent
        scroll
        style={{
          paddingTop: 16,
          paddingBottom: 24,
          paddingRight: 24,
          paddingLeft: 24,
        }}
        edges={['bottom', 'right', 'left']}>
        <ProfileMenu />
      </SafeContent>
    </ScreenContainer>
  );
};

ProfileScreen.options = {
  title: 'Profile screen',
  drawerLabel: 'Profile',
  drawerIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="smile" color={focused ? '#E36414' : '#757575'} />
  ),
  ...simpleHeaderProps,
};
