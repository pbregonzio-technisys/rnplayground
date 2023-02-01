import * as React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export const Button = ({
  children,
  onPress,
  ...rest
}: {
  children: React.ReactNode;
  onPress: any;
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const animationStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['white', '#FFF7F2']
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
      hitSlop={{ top: 8, left: 24, right: 24, bottom: 8 }} // really important :)
      pressRetentionOffset={4}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      {...rest}>
      <Animated.View style={[styles.pressable, animationStyles]}>
        <Text style={styles.text}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  text: {
    color: '#E36414',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
