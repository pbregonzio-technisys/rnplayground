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

  return (
    <Pressable
      style={styles.wrapper}
      accessibilityLabel={label}
      accessible={true}
      key={label}
      testID={label}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <Animated.View style={[styles.pressable, animationPressableStyles]}>
        <Animated.Text style={[styles.text, animationTextStyles]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});
