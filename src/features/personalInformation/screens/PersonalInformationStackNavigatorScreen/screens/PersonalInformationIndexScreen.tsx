import * as React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenContainer } from '../../../../../components/ScreenContainer';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';
import { Button } from '../../../../../components/Button';
import { SafeContent } from '../../../../..//components/SafeContent';

export const PersonalInformationIndexScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScreenContainer statusBarScheme="dark">
      <SafeContent
        scroll
        outerMargin={{
          paddingTop: 16,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
          paddingBottom: 24,
          // paddingBottom: 24 + insets.bottom,
        }}>
        <Text>
          Insets should be used only to set a padding with the device boundaries
        </Text>
      </SafeContent>
      <SafeContent
        outerMargin={{
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.right,
          paddingBottom: 8 + insets.bottom,
        }}>
        <Button onPress={() => console.log('tap')}>Continue</Button>
      </SafeContent>
    </ScreenContainer>
  );
};

PersonalInformationIndexScreen.options = {
  title: 'Personal Information index screen ',
  ...simpleHeaderProps,
};
