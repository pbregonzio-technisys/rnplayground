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

type SegmentedControlItemProps = {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const interpolationByTypeLookup = {
  default: {
    backgroundColor: [
      theme.SegmentedControlItemBackgroundColor,
      theme.SegmentedControlItemBackgroundColorPressed,
    ],
    color: [
      theme.SegmentedControlItemTextColor,
      theme.SegmentedControlItemTextColorPressed,
    ],
  },
  selected: {
    backgroundColor: [
      theme.SegmentedControlItemBackgroundColorSelected,
      theme.SegmentedControlItemBackgroundColorSelectedPressed,
    ],
    color: [
      theme.SegmentedControlItemTextColorSelected,
      theme.SegmentedControlItemTextColorSelectedPressed,
    ],
  },
};

export const SegmentedControlItem: React.FC<SegmentedControlItemProps> = ({
  label,
  selected,
  disabled = false,
  onPress,
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const animationPressableStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[selected ? 'selected' : 'default']
        .backgroundColor
    );

    return { backgroundColor };
  });

  const animationTextStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[selected ? 'selected' : 'default'].color
    );

    return { color };
  });

  React.useEffect(() => {
    if (!pressed) {
      progress.value = withTiming(0, {
        duration: theme.SegmentedControlItemAnimationDuration,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: theme.SegmentedControlItemAnimationDuration * 0.75,
        easing: Easing.ease,
      });
    }
  });

  const styles = makeStyles(selected);

  return (
    <Pressable
      style={styles.wrapper}
      accessibilityLabel={label}
      accessible={true}
      disabled={disabled}
      key={label}
      testID={label}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.pressable,
          disabled ? styles.pressableDisabled : animationPressableStyles,
        ]}>
        <Animated.Text
          style={[
            styles.text,
            disabled ? styles.textDisabled : animationTextStyles,
          ]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const makeStyles = (selected?: boolean) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    pressable: {
      marginHorizontal: theme.SegmentedControlGap / 2,
      padding: theme.SegmentedControlItemPadding,
      borderRadius: theme.SegmentedControlItemBorderRadius,
    },
    text: {
      fontSize: theme.SegmentedControlItemTextFontSize,
      textAlign: theme.SegmentedControlItemTextTextAlign,
    },
    pressableDisabled: {
      backgroundColor: selected
        ? theme.SegmentedControlItemBackgroundColorSelectedDisabled
        : theme.SegmentedControlItemBackgroundColorDisabled,
    },
    textDisabled: {
      color: selected
        ? theme.SegmentedControlItemTextColorSelectedDisabled
        : theme.SegmentedControlItemTextColorDisabled,
    },
  });
