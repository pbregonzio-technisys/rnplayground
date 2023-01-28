import * as React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context';

import {
  BOTTOM_TABS_NAVIGATOR_SCREEN_NAMES,
  BOTTOM_TABS_NAVIGATOR_SCREENS,
} from '../constants/navigation/bottomTab';
import {
  DRAWER_NAVIGATOR_SCREEN_NAMES,
  DRAWER_NAVIGATOR_SCREENS,
} from '../constants/navigation/drawer';
import { AuthContext } from '../providers/AuthProvider';
import { Icon } from '../components/Icon';

export const DrawerMenu = (props: any) => {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const insets = useSafeAreaInsets();
  const styles = makeStyles(insets);

  return (
    <DrawerContentScrollView {...props}>
      <ColorfulLinearGradient style={styles.drawerHeaderView}>
        <Text style={styles.drawerHeaderText}>Hola, Pablo Bregonzio</Text>
      </ColorfulLinearGradient>
      <View style={styles.drawerInnerView}>
        {BOTTOM_TABS_NAVIGATOR_SCREEN_NAMES.map((name) => (
          <DrawerItem
            key={name}
            icon={BOTTOM_TABS_NAVIGATOR_SCREENS[name].options.tabBarIcon}
            labelStyle={{ fontSize: 16 }}
            label={
              BOTTOM_TABS_NAVIGATOR_SCREENS[name].options.tabBarLabel ||
              BOTTOM_TABS_NAVIGATOR_SCREENS[name].options.title ||
              name
            }
            onPress={() => [
              props.navigation.jumpTo('DrawerNavigatorScreen', {
                screen: name,
              }),
              props.navigation.closeDrawer(),
            ]}
          />
        ))}
        {DRAWER_NAVIGATOR_SCREEN_NAMES.map((name) => (
          <DrawerItem
            labelStyle={{ fontSize: 16 }}
            key={name}
            icon={DRAWER_NAVIGATOR_SCREENS[name].options.drawerIcon}
            label={
              DRAWER_NAVIGATOR_SCREENS[name].options.drawerLabel ||
              DRAWER_NAVIGATOR_SCREENS[name].options.title ||
              name
            }
            onPress={() => [
              props.navigation.jumpTo(name),
              props.navigation.closeDrawer(),
            ]}
          />
        ))}
      </View>
      <View style={styles.drawerInnerView}>
        <DrawerItem
          labelStyle={{ fontSize: 16 }}
          icon={(props) => <Icon name="log-out" {...props} />}
          label="Log out"
          onPress={() => setIsAuthenticated(false)}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const makeStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    drawerHeaderView: {
      marginTop: -insets.top - 12,
      paddingTop: insets.top + 12 + 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 24,
    },
    drawerHeaderText: { color: 'white', fontSize: 20, fontWeight: '600' },
    drawerInnerView: {
      paddingHorizontal: 8,
      paddingVertical: 16,
      flex: 1,
    },
  });

const ColorfulLinearGradient = (props: any) => {
  return (
    <LinearGradient
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#AD0E71', '#d14833']}
      {...props}
    />
  );
};
