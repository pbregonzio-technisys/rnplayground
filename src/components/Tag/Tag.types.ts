import * as React from 'react';

export type TagTypesType = 'default' | 'primary';
export type TagSizesType = 'medium' | 'small';
export type TagColorSwatchThemeType = {
  BackgroundColor?: string;
  BackgroundColorPressed?: string;
  TextBackgroundColor?: string;
  TextBackgroundColorPressed?: string;
};

export type TagPropsType = {
  children: React.ReactNode;
  type?: TagTypesType;
  size?: TagSizesType;
  theme?: TagColorSwatchThemeType;
  onPress: any;
  disabled?: boolean;
  accessibilityLabel?: string;
  styles?: {
    wrapper?: any;
    pressable?: any;
    text?: any;
  };
};
