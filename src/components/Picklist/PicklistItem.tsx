import React from 'react';
import { Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { theme } from './theme';

type PicklistItemProps = {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  styles: any;
};

const interpolationByTypeLookup = {
  default: {
    borderColor: [
      theme.PicklistItemBorderColor,
      theme.PicklistItemBorderColorPressed,
    ],
  },
  selected: {
    borderColor: [
      theme.PicklistItemBorderColorSelected,
      theme.PicklistItemBorderColorSelectedPressed,
    ],
  },
};

export const PicklistItem: React.FC<PicklistItemProps> = ({
  label,
  selected,
  disabled = false,
  onPress,
  styles: styleProps,
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const animationPressableStyles = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[selected ? 'selected' : 'default'].borderColor
    );

    return { borderColor };
  });

  React.useEffect(() => {
    if (!pressed) {
      progress.value = withTiming(0, {
        duration: theme.PicklistItemAnimationDuration,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: theme.PicklistItemAnimationDuration * 0.75,
        easing: Easing.ease,
      });
    }
  });

  const styles = makeStyles(selected);

  return (
    <Pressable
      accessibilityLabel={label}
      accessible={true}
      disabled={disabled}
      style={[styleProps.wrapper]}
      key={label}
      testID={label}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.pressable,
          styleProps.pressable,
          selected && !disabled && styles.selectedDropShadow,
          disabled ? styles.pressableDisabled : animationPressableStyles,
        ]}>
        <Animated.Text
          style={[
            styles.text,
            styleProps.text,
            disabled && styles.textDisabled,
          ]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const makeStyles = (selected?: boolean) =>
  StyleSheet.create({
    selectedDropShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 4,
    },
    pressable: {
      paddingHorizontal: theme.PicklistItemPaddingHorizontal - 1,
      paddingVertical: theme.PicklistItemPaddingVertical - 1,
      borderRadius: theme.PicklistItemBorderRadius,
      minHeight: 40,
      borderWidth: 1,
      backgroundColor: theme.PicklistItemBackgroundColor,
    },
    text: {
      fontSize: theme.PicklistItemTextFontSize,
      textAlign: theme.PicklistItemTextTextAlign,
      color: theme.PicklistItemTextColor,
    },
    pressableDisabled: {
      backgroundColor: selected
        ? theme.PicklistItemBackgroundColorSelectedDisabled
        : theme.PicklistItemBackgroundColorDisabled,
      borderColor: selected
        ? theme.PicklistItemBorderColorSelectedDisabled
        : theme.PicklistItemBorderColorDisabled,
    },
    textDisabled: {
      color: selected
        ? theme.PicklistItemTextColorSelectedDisabled
        : theme.PicklistItemTextColorDisabled,
    },
  });
