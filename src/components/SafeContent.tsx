import * as React from 'react';
import { View, ScrollView } from 'react-native';

export const SafeContent = ({
  children,
  scroll = false,
  outerMargin,
  style,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  outerMargin?: object;
  style?: any;
}) => {
  const Element = scroll ? ScrollView : React.Fragment;

  return (
    <Element>
      <View style={[outerMargin, style]}>{children}</View>
    </Element>
  );
};
