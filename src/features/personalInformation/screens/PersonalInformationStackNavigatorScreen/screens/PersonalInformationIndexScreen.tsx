import * as React from 'react';
import { Text } from 'react-native';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';
import { Button } from '../../../../../components/Button';
import { SafeContent } from '../../../../..//components/SafeContent';

export const PersonalInformationIndexScreen = () => {
  return (
    <ScreenContainer statusBarScheme="dark">
      <SafeContent
        scroll
        style={{
          paddingTop: 16,
          paddingRight: 24,
          paddingLeft: 24,
          paddingBottom: 24,
        }}
        edges={['left', 'right']}>
        <Text>
          Insets should be used only to set a padding with the device boundaries
        </Text>
      </SafeContent>
      <SafeContent
        style={{
          paddingRight: 24,
          paddingLeft: 24,
          paddingBottom: 8,
        }}
        edges={['right', 'left', 'bottom']}>
        <Button onPress={() => console.log('tap')}>Continue</Button>
      </SafeContent>
    </ScreenContainer>
  );
};

PersonalInformationIndexScreen.options = {
  title: 'Personal Information index screen ',
  ...simpleHeaderProps,
};
