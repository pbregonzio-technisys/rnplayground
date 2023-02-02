import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { SegmentedControlItem } from './SegmentedControlItem';
import { theme } from './theme';

type SegmentedControlProps = {
  labels: string[];
  initialIndex?: number;
  onValueChange: (value: string) => void;
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  labels,
  initialIndex = 0,
  onValueChange,
}) => {
  const [selectedIndex, setSelectedIndex] =
    React.useState<number>(initialIndex);

  return (
    <View style={styles.root}>
      {labels.map((label, index) => (
        <SegmentedControlItem
          key={label}
          label={label}
          selected={selectedIndex === index}
          onPress={() => {
            setSelectedIndex(index);
            onValueChange(label);
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
    paddingHorizontal: theme.SegmentedControlGap / 2,
    backgroundColor: theme.SegmentedControlBackgroundColor,
  },
});
