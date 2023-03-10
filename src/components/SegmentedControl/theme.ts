import { theme as tagTheme } from '../Tag/theme';

export const theme = {
  ButtonBorderRadius: 16,
  ButtonPadding: 16,
  ButtonSmallPadding: 12,
  ButtonTextFontSize: 16,
  ButtonSmallTextFontSize: 12,
  ButtonTextFontWeight: '600',
  ButtonTextTextAlign: 'center',
  ButtonTextColorDisabled: '#DBDBDB',
  ButtonBackgroundColorDisabled: '#F2F2F2',
  ButtonAnimationDuration: 200,

  ButtonPrimaryBackgroundColor: '#E36414',
  ButtonPrimaryBackgroundColorPressed: '#F97C2E',
  ButtonPrimaryTextBackgroundColor: 'white',
  ButtonPrimaryTextBackgroundColorPressed: 'white',

  ButtonSecondaryBackgroundColor: '#FFF7F2',
  ButtonSecondaryBackgroundColorPressed: 'white',
  ButtonSecondaryTextBackgroundColor: '#E36414',
  ButtonSecondaryTextBackgroundColorPressed: '#F97C2E',

  ButtonTertearyBackgroundColor: 'white',
  ButtonTertearyBackgroundColorPressed: '#FFF7F2',
  ButtonTertearyTextBackgroundColor: '#E36414',
  ButtonTertearyTextBackgroundColorPressed: '#F97C2E',

  ...tagTheme,

  SegmentedControlBorderRadius: 16,
  SegmentedControlPadding: 4,
  SegmentedControlGap: 4,
  SegmentedControlBackgroundColor: '#F2F2F2',
  SegmentedControlItemBackgroundColor: '#F2F2F2',
  SegmentedControlItemBackgroundColorPressed: '#DBDBDB',
  SegmentedControlItemBackgroundColorSelected: 'white',
  SegmentedControlItemBackgroundColorSelectedPressed: '#FFF7F2',
  SegmentedControlItemBorderRadius: 12,
  SegmentedControlItemPadding: 8,
  SegmentedControlItemTextFontSize: 16,
  SegmentedControlItemTextTextAlign: 'center',
  SegmentedControlItemTextColor: '#3B3B3B',
  SegmentedControlItemTextColorPressed: '#3B3B3B',
  SegmentedControlItemTextColorSelected: '#E36414',
  SegmentedControlItemTextColorSelectedPressed: '#F97C2E',
  SegmentedControlItemAnimationDuration: 300,
  SegmentedControlItemBackgroundColorDisabled: '#F2F2F2',
  SegmentedControlItemBackgroundColorSelectedDisabled: 'white',
  SegmentedControlItemTextColorDisabled: '#DBDBDB',
  SegmentedControlItemTextColorSelectedDisabled: '#DBDBDB',
} as const;
