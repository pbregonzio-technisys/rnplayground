import { StyleSheet } from 'react-native';

import type { TagTypesType, TagSizesType } from './Tag.types';

export const makeStyles = (
  theme: any,
  type: TagTypesType,
  size: TagSizesType
) =>
  StyleSheet.create({
    pressable: {
      paddingHorizontal:
        size === 'medium'
          ? theme.TagPaddingHorizontal
          : theme.TagSmallPaddingHorizontal,
      paddingVertical:
        size === 'medium'
          ? theme.TagPaddingVertical
          : theme.TagSmallPaddingVertical,
      borderRadius: theme.TagBorderRadius,
    },
    text: {
      fontSize:
        size === 'medium' ? theme.TagTextFontSize : theme.TagSmallTextFontSize,
      borderRadius: theme.TagBorderRadius,
      fontWeight: theme.TagTextFontWeight,
      textAlign: theme.TagTextTextAlign,
    },
    pressableDisabled: {
      backgroundColor: theme.TagBackgroundColorDisabled,
    },
    textDisabled: {
      color: theme.TagTextColorDisabled,
    },
  });
