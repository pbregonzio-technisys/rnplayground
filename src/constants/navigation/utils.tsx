import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { Icon } from '../../components/Icon';

export const tabBarProps = {
  tabBarStyle: {
    // height: 88,
    paddingTop: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 4,
  },
  tabBarActiveTintColor: '#E36414',
};

const ColorfulLinearGradient = ({ ...props }) => {
  return (
    <LinearGradient
      style={globalStyles.linearGradient}
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
  headerTitleContainerStyle: {
    marginBottom: 8,
  },
  headerLeftContainerStyle: {
    marginBottom: 8,
  },
  headerRightContainerStyle: {
    marginBottom: 8,
  },
  headerStyle: {
    // height: 72, // ios
    height: 28 + 72, // ios with inset
  },
  headerBackground: () => <ColorfulLinearGradient />,
  headerLeft: () => <DrawerTrigger />,
};

const DrawerTrigger = () => {
  const { toggleDrawer } = useNavigation<any>();
  return (
    <TouchableOpacity
      style={globalStyles.drawerTrigger}
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
      <View style={globalStyles.closeActionWrapper}>
        <CloseAction />
      </View>
      <View style={globalStyles.titleWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const CloseAction = () => {
  const { canGoBack, goBack } = useNavigation();

  return canGoBack() ? (
    <TouchableOpacity style={globalStyles.closeAction} onPress={goBack}>
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

const globalStyles = StyleSheet.create({
  linearGradient: { flex: 1 },
  closeAction: { padding: 8, marginLeft: 16 },
  closeActionWrapper: { marginBottom: 8 },
  drawerTrigger: { padding: 8, marginLeft: 16 },
  titleWrapper: { flexDirection: 'row' },
});
