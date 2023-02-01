import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { DrawerMenu } from './DrawerMenu';
import {
  BOTTOM_TABS_NAVIGATOR_SCREEN_NAMES,
  BOTTOM_TABS_NAVIGATOR_SCREENS,
  BottomTabsNavigatorParams,
} from '../constants/navigation/bottomTab';
import {
  PUBLIC_STACK_NAVIGATOR_SCREEN_NAMES,
  PUBLIC_STACK_NAVIGATOR_SCREENS,
  PublicStackNavigatorParams,
} from '../constants/navigation/publicStack';
import {
  DRAWER_NAVIGATOR_SCREEN_NAMES,
  DRAWER_NAVIGATOR_SCREENS,
  DrawerNavigatorParams,
} from '../constants/navigation/drawer';
import {
  PRIVATE_STACK_NAVIGATOR_SCREEN_NAMES,
  PRIVATE_STACK_NAVIGATOR_SCREENS,
  PrivateStackNavigatorParams,
} from '../constants/navigation/privateStack';

import { AuthContext } from '../providers/AuthProvider';

import WelcomeScreen from '../features/welcome/screens/WelcomeScreen';

const Stack = createStackNavigator<
  PrivateStackNavigatorParams & PublicStackNavigatorParams
>();
const Drawer = createDrawerNavigator<DrawerNavigatorParams>();
const BottomTabs = createBottomTabNavigator<BottomTabsNavigatorParams>();

export const CompoundNavigator = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <NavigationContainer
      fallback={<Text>Loading…</Text>}
      theme={{
        dark: false,
        colors: {
          primary: '#E36414',
          background: 'white',
          card: 'white',
          text: '#3b3b3b',
          border: 'transparent',
          notification: 'green',
        },
      }}
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? route?.name} - React Navigation Example`,
      }}>
      <Stack.Navigator
        initialRouteName={
          isAuthenticated ? 'PrivateStackNavigatorScreen' : 'WelcomeScreen'
        }
        screenOptions={{
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={WelcomeScreen.options}
          />
        ) : (
          <>
            <Stack.Screen
              name="PrivateStackNavigatorScreen"
              options={{
                title: 'Private stack navigator screen',
                headerShown: false,
              }}>
              {() => (
                <Drawer.Navigator
                  backBehavior="initialRoute"
                  drawerContent={DrawerMenu}
                  id="rootDrawer"
                  initialRouteName="DrawerNavigatorScreen"
                  screenOptions={{
                    drawerType: 'front',
                  }}>
                  {DRAWER_NAVIGATOR_SCREEN_NAMES.map((name) => (
                    <Drawer.Screen
                      key={name}
                      name={name}
                      component={DRAWER_NAVIGATOR_SCREENS[name]}
                      options={DRAWER_NAVIGATOR_SCREENS[name].options}
                    />
                  ))}
                  <Drawer.Screen
                    name="DrawerNavigatorScreen"
                    options={{
                      title: 'Drawer navigator screen',
                      headerShown: false,
                    }}>
                    {() => (
                      <BottomTabs.Navigator
                        backBehavior="initialRoute"
                        screenOptions={{
                          tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: '600',
                            marginTop: 8,
                          },
                        }}>
                        {BOTTOM_TABS_NAVIGATOR_SCREEN_NAMES.map((name) => (
                          <BottomTabs.Screen
                            key={name}
                            name={name}
                            component={
                              BOTTOM_TABS_NAVIGATOR_SCREENS[name] as any
                            }
                            options={
                              BOTTOM_TABS_NAVIGATOR_SCREENS[name].options as any
                            }
                          />
                        ))}
                      </BottomTabs.Navigator>
                    )}
                  </Drawer.Screen>
                </Drawer.Navigator>
              )}
            </Stack.Screen>
            {PRIVATE_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
              <Stack.Screen
                key={name}
                name={name}
                component={PRIVATE_STACK_NAVIGATOR_SCREENS[name] as any}
                options={PRIVATE_STACK_NAVIGATOR_SCREENS[name].options as any}
              />
            ))}
          </>
        )}
        {PUBLIC_STACK_NAVIGATOR_SCREEN_NAMES.map((name) => (
          <Stack.Screen
            key={name}
            name={name}
            component={PUBLIC_STACK_NAVIGATOR_SCREENS[name] as any}
            options={PUBLIC_STACK_NAVIGATOR_SCREENS[name].options as any}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
