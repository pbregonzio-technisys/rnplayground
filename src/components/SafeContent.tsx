import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView, EdgeInsets } from 'react-native-safe-area-context';

export const SafeContent = ({
  children,
  scroll = false,
  edges,
  style,
  mode,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  edges?: EdgeInsets;
  style?: any;
  mode?: any;
}) => {
  const OuterElement = scroll ? ScrollView : React.Fragment;
  const InnerElement = edges ? SafeAreaView : View;
  return (
    <OuterElement>
      <InnerElement style={style} mode={mode}>
        {children}
      </InnerElement>
    </OuterElement>
  );
};
