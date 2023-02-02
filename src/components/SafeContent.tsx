import * as React from 'react';
import { View, ScrollView } from 'react-native';

export const SafeContent = ({
  children,
  scroll = false,
  style,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  style?: any;
}) => {
  const OuterElement = scroll ? ScrollView : React.Fragment;
  return (
    <OuterElement>
      <View style={style}>{children}</View>
    </OuterElement>
  );
};
