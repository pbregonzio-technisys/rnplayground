import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { SegmentedControlItem } from './SegmentedControlItem';
import { theme } from './theme';

interface Props {
  values: string[];
  onValueChange: (value: string) => void;
}

export const SegmentedControl: React.FC<Props> = ({
  values,
  onValueChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.root}>
      {values.map((value, index) => (
        <SegmentedControlItem
          key={value}
          value={value}
          active={selectedIndex === index}
          onPress={() => {
            setSelectedIndex(index);
            onValueChange(value);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: theme.SegmentedControlBorderRadius,
    paddingVertical: theme.SegmentedControlPadding,
    paddingHorizontal: theme.SegmentedControlItemGap / 2,
    backgroundColor: theme.SegmentedControlBackgroundColor,
  },
});
