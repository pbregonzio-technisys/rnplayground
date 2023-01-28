import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '../../../../components/ListItem';
import { View } from 'react-native';

export const ProfileMenu = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ marginHorizontal: -12 }}>
      <ListItem
        onPress={() => navigate('PersonalInformationStackNavigatorScreen')}>
        Personal Information
      </ListItem>
      <ListItem onPress={() => navigate('ChangePasswordStackNavigatorScreen')}>
        Change Password
      </ListItem>
    </View>
  );
};
