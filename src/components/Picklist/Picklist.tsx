import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { PicklistItem } from './PicklistItem';
import { theme } from './theme';

type PicklistProps = {
  labels: string[];
  initialIndex?: number;
  onChange: (value: string) => void;
};

export const Picklist: React.FC<PicklistProps> = ({
  labels,
  initialIndex = 0,
  onChange,
}) => {
  const [selectedIndex, setSelectedIndex] =
    React.useState<number>(initialIndex);

  return (
    <View style={styles.root}>
      {labels.map((label, idx) => (
        <PicklistItem
          key={label}
          label={label}
          selected={selectedIndex === idx}
          onPress={() => {
            setSelectedIndex(idx);
            onChange(label);
          }}
          styles={{ pressable: { marginTop: idx !== 0 && 16 } }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flexDirection: 'row',
    // minHeight: 200,
    // overflow: 'hidden',
    // borderRadius: theme.PicklistBorderRadius,
    // paddingVertical: theme.PicklistPadding,
    // paddingHorizontal: theme.PicklistGap / 2,
    // backgroundColor: theme.PicklistBackgroundColor,
  },
});
