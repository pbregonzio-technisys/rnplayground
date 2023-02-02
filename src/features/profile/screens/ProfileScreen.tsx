import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenContainer } from '../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../constants/navigation/utils';
import { SafeContent } from '../../../components/SafeContent';
import { Icon } from '../../../components/Icon';
import { ProfileMenu } from './components/ProfileMenu';

export const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer statusBarScheme="dark">
      <SafeContent
        scroll
        style={{
          paddingTop: 16,
          paddingBottom: 24 + insets.bottom,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
        }}>
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
