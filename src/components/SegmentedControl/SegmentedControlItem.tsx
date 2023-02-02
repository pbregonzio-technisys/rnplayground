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
  value: string;
  onPress: (event: GestureResponderEvent) => void;
  active?: boolean;
};

export const SegmentedControlItem: React.FC<SegmentedControlItemProps> = ({
  value,
  active,
  onPress,
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const styles = makeStyles(active);

  const tapAnimationStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      active
        ? [
            theme.SegmentedControlItemBackgroundColorActive,
            theme.SegmentedControlItemBackgroundColorActivePressed,
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
        duration: 200,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: 150,
        easing: Easing.ease,
      });
    }
  });

  return (
    <Pressable
      style={styles.wrapper}
      accessibilityLabel={value}
      accessible={true}
      key={value}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <Animated.View style={[styles.pressable, tapAnimationStyles]}>
        <Text style={[styles.text]}>{value}</Text>
      </Animated.View>
    </Pressable>
  );
};

const makeStyles = (active?: boolean) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    pressable: {
      marginHorizontal: theme.SegmentedControlItemGap / 2,
      padding: theme.SegmentedControlItemPadding,
      borderRadius: theme.SegmentedControlItemBorderRadius,
    },
    text: {
      color: active
        ? theme.SegmentedControlItemTextColorActive
        : theme.SegmentedControlItemTextColor,
      fontSize: theme.SegmentedControlItemTextFontSize,
      textAlign: theme.SegmentedControlItemTextTextAlign,
    },
  });
