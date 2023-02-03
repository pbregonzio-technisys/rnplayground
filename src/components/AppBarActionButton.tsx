import * as React from 'react';

import { Icon } from './Icon';
import type { IconGlyphsType } from './Icon';
import { Button } from './Button/Button';

export const AppBarActionButton = ({
  iconName,
  onPress,
  accessibilityLabel,
  styles,
  colorScheme = 'light',
}: {
  iconName: IconGlyphsType;
  onPress?: any;
  accessibilityLabel: string;
  styles?: any;
  colorScheme?: 'light' | 'dark';
}) => {
  return (
    <Button
      styles={styles}
      size="small"
      onPress={onPress}
      theme={{
        BackgroundColor: colorScheme === 'light' ? '#ffffff00' : '#3b3b3b00',
        BackgroundColorPressed:
          colorScheme === 'light' ? '#ffffff22' : '#3b3b3b22',
        TextBackgroundColor: colorScheme === 'light' ? '#ffffff' : '#3b3b3b',
        TextBackgroundColorPressed:
          colorScheme === 'light' ? '#ffffff' : '#3b3b3b',
      }}
      accessibilityLabel={accessibilityLabel}>
      <Icon
        name={iconName}
        color={colorScheme === 'light' ? '#ffffff' : '#3b3b3b'}
      />
    </Button>
  );
};
