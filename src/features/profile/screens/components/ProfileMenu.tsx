import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ListItem } from '../../../../components/ListItem';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../../../../constants/navigation/privateStack';

export const ProfileMenu = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.extendedView}>
      <ListItem
        onPress={() =>
          navigate(
            PRIVATE_STACK_NAVIGATOR_SCREENS
              .PersonalInformationStackNavigatorScreen.name as any
          )
        }>
        Personal Information
      </ListItem>
      <ListItem
        onPress={() =>
          navigate(
            PRIVATE_STACK_NAVIGATOR_SCREENS.ChangePasswordStackNavigatorScreen
              .name as any
          )
        }>
        Change Password
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  extendedView: { marginHorizontal: -12 },
});
