/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '../../components/Icon';

export const tabBarProps = {
  tabBarStyle: {
    height: 88,
    paddingTop: 12,
    borderRadius: 16,
  },
  tabBarActiveTintColor: '#E36414',
};

const ColorfulLinearGradient = ({ ...props }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#AD0E71', '#E36414']}
      {...props}
    />
  );
};

export const colorfulHeaderProps = {
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 20,
  },
  headerBackground: () => <ColorfulLinearGradient />,
  headerLeft: () => <DrawerTrigger />,
};

const DrawerTrigger = () => {
  const { toggleDrawer } = useNavigation<any>();
  return (
    <TouchableOpacity
      style={{ marginLeft: 16, padding: 8 }}
      onPress={toggleDrawer}
      accessibilityLabel="Menu">
      <Icon name="menu" color="white" />
    </TouchableOpacity>
  );
};

export const simpleHeaderProps = {
  header: SimpleHeader,
};

function SimpleHeader({ route, options }: any) {
  const title = getHeaderTitle(options, route.name);
  const { top } = useSafeAreaInsets();
  const styles = makeStyles(top);

  return (
    <View style={styles.root}>
      <View style={{ marginBottom: 8 }}>
        <CloseStack />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const CloseStack = () => {
  const { canGoBack, goBack } = useNavigation();

  return canGoBack() ? (
    <TouchableOpacity style={{ padding: 8, marginLeft: 16 }} onPress={goBack}>
      <Icon name="left-arrow" color="#3b3b3b" />
    </TouchableOpacity>
  ) : (
    <></>
  );
};

const makeStyles = (top: number) =>
  StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '400',
    },
    titleWrapper: {
      flex: 1,
      paddingHorizontal: 24,
    },
    root: {
      paddingTop: 8 + top,
      paddingBottom: 12,
    },
  });
