import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
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

export const SegmentedControlItem: React.FC<SegmentedControlItemProps> = ({
  label,
  selected,
  onPress,
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const styles = makeStyles(selected);

  const tapAnimationStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      selected
        ? [
            theme.SegmentedControlItemBackgroundColorSelected,
            theme.SegmentedControlItemBackgroundColorSelectedPressed,
          ]
        : [
            theme.SegmentedControlItemBackgroundColor,
            theme.SegmentedControlItemBackgroundColorPressed,
          ]
    );

    return { backgroundColor };
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
      <Animated.View style={[styles.pressable, tapAnimationStyles]}>
        <Text style={[styles.text]}>{label}</Text>
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
      color: selected
        ? theme.SegmentedControlItemTextColorSelected
        : theme.SegmentedControlItemTextColor,
      fontSize: theme.SegmentedControlItemTextFontSize,
      textAlign: theme.SegmentedControlItemTextTextAlign,
    },
  });
