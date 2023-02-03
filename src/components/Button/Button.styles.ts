import { StyleSheet } from 'react-native';

import type { ButtonTypesType, ButtonSizesType } from './Button.types';

export const makeStyles = (
  theme: any,
  type: ButtonTypesType,
  size: ButtonSizesType
) =>
  StyleSheet.create({
    pressable: {
      padding:
        size === 'medium' ? theme.ButtonPadding : theme.ButtonSmallPadding,
      borderRadius: theme.ButtonBorderRadius,
    },
    text: {
      fontSize:
        size === 'medium'
          ? theme.ButtonTextFontSize
          : theme.ButtonSmallTextFontSize,
      borderRadius: theme.ButtonBorderRadius,
      fontWeight: theme.ButtonTextFontWeight,
      textAlign: theme.ButtonTextTextAlign,
    },
    pressableDisabled: {
      backgroundColor:
        type === 'terteary'
          ? theme.ButtonTertearyBackgroundColor
          : theme.ButtonBackgroundColorDisabled,
    },
    textDisabled: {
      color: theme.ButtonTextColorDisabled,
    },
  });
