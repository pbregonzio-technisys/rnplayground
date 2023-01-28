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
        <Text style={{ fontSize: 20, marginBottom: 12 }}>
          Insets should be used only to set a padding with the device boundaries
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          perferendis error assumenda quod aperiam, autem accusantium. Eius
          illo, est cum quod, enim aliquid doloribus ea inventore fugit
        </Text>
      </SafeContent>
      <SafeContent
        outerMargin={{
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.right,
          paddingBottom: 8 + insets.bottom,
        }}>
        <Button>Continue</Button>
      </SafeContent>
    </ScreenContainer>
  );
};

PersonalInformationIndexScreen.options = {
  title: 'Personal Information index screen ',
  ...simpleHeaderProps,
};
