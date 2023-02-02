import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { theme } from '../SegmentedControl/theme';

type ButtonTypesType = keyof typeof interpolationByTypeLookup;

const interpolationByTypeLookup = {
  primary: {
    backgroundColor: [
      theme.ButtonPrimaryBackgroundColor,
      theme.ButtonPrimaryBackgroundColorPressed,
    ],
    color: [
      theme.ButtonPrimaryTextBackgroundColor,
      theme.ButtonPrimaryTextBackgroundColorPressed,
    ],
  },
  secondary: {
    backgroundColor: [
      theme.ButtonSecondaryBackgroundColor,
      theme.ButtonSecondaryBackgroundColorPressed,
    ],
    color: [
      theme.ButtonSecondaryTextBackgroundColor,
      theme.ButtonSecondaryTextBackgroundColorPressed,
    ],
  },
  terteary: {
    backgroundColor: [
      theme.ButtonTertearyBackgroundColor,
      theme.ButtonTertearyBackgroundColorPressed,
    ],
    color: [
      theme.ButtonTertearyTextBackgroundColor,
      theme.ButtonTertearyTextBackgroundColorPressed,
    ],
  },
};

export const Button = ({
  type = 'secondary',
  children,
  onPress,
  disabled = false,
  ...rest
}: {
  children: React.ReactNode;
  type?: ButtonTypesType;
  onPress: any;
  disabled?: boolean;
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
        duration: theme.ButtonAnimationDuration,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: theme.ButtonAnimationDuration * 0.75,
        easing: Easing.ease,
      });
    }
  });

  const styles = makeStyles(type);

  return (
    <Pressable
      onPressIn={!disabled ? () => setPressed(true) : undefined}
      onPressOut={!disabled ? () => setPressed(false) : undefined}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
      {...rest}>
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
          {children}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const makeStyles = (type: ButtonTypesType) =>
  StyleSheet.create({
    pressable: {
      padding: theme.ButtonPadding,
      borderRadius: theme.ButtonBorderRadius,
    },
    text: {
      fontSize: theme.ButtonTextFontSize,
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

// Disabled styles for terteary buttons
