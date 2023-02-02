import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type ButtonTypesType = keyof typeof interpolationByTypeLookup;

const theme = {
  ButtonBorderRadius: 16,
  ButtonPadding: 16,
  ButtonTextFontSize: 16,
  ButtonTextFontWeight: '600',
  ButtonTextTextAlign: 'center',
} as const;

const interpolationByTypeLookup = {
  primary: {
    backgroundColor: ['#E36414', '#F97C2E'],
    color: ['white', 'white'],
  },
  secondary: {
    backgroundColor: ['#FFF7F2', 'white'],
    color: ['#E36414', '#F97C2E'],
  },
  terteary: {
    backgroundColor: ['white', '#FFF7F2'],
    color: ['#E36414', '#F97C2E'],
  },
};

export const Button = ({
  type = 'secondary',
  children,
  onPress,
  ...rest
}: {
  children: React.ReactNode;
  type?: ButtonTypesType;
  onPress: any;
}) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const animationPressableStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[type].backgroundColor
    );

    return { backgroundColor };
  });

  const animationTextStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[type].color
    );

    return { color };
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
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      {...rest}>
      <Animated.View style={[styles.pressable, animationPressableStyles]}>
        <Animated.Text style={[styles.text, animationTextStyles]}>
          {children}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: theme.ButtonPadding,
    borderRadius: theme.ButtonBorderRadius,
  },
  text: {
    fontSize: theme.ButtonTextFontSize,
    fontWeight: theme.ButtonTextFontWeight,
    textAlign: theme.ButtonTextTextAlign,
  },
});
