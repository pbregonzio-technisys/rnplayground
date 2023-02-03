import * as React from 'react';

export type ButtonTypesType = 'primary' | 'secondary' | 'terteary';
export type ButtonSizesType = 'medium' | 'small';
export type ButtonColorSwatchThemeType = {
  BackgroundColor?: string;
  BackgroundColorPressed?: string;
  TextBackgroundColor?: string;
  TextBackgroundColorPressed?: string;
};

export type ButtonPropsType = {
  children: React.ReactNode;
  type?: ButtonTypesType;
  size?: ButtonSizesType;
  theme?: ButtonColorSwatchThemeType;
  onPress: any;
  disabled?: boolean;
  accessibilityLabel?: string;
  styles?: {
    wrapper?: any;
    pressable?: any;
    text?: any;
  };
};
