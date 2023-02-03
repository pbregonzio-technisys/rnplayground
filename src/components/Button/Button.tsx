import * as React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { theme as globalTheme } from '../SegmentedControl/theme';
import type { ButtonPropsType } from './Button.types';
import { makeStyles } from './Button.styles';

export const Button = ({
  type = 'terteary',
  size = 'medium',
  styles: localStyles = {},
  theme: localTheme = {},
  children,
  onPress,
  disabled = false,
  accessibilityLabel,
  ...rest
}: ButtonPropsType) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const interpolationByTypeLookup = {
    primary: {
      backgroundColor: [
        localTheme.BackgroundColor || globalTheme.ButtonPrimaryBackgroundColor,
        localTheme.BackgroundColorPressed ||
          globalTheme.ButtonPrimaryBackgroundColorPressed,
      ],
      color: [
        localTheme.TextBackgroundColor ||
          globalTheme.ButtonPrimaryTextBackgroundColor,
        localTheme.TextBackgroundColorPressed ||
          globalTheme.ButtonPrimaryTextBackgroundColorPressed,
      ],
    },
    secondary: {
      backgroundColor: [
        localTheme.BackgroundColor ||
          globalTheme.ButtonSecondaryBackgroundColor,
        localTheme.BackgroundColorPressed ||
          globalTheme.ButtonSecondaryBackgroundColorPressed,
      ],
      color: [
        localTheme.TextBackgroundColor ||
          globalTheme.ButtonSecondaryTextBackgroundColor,
        localTheme.TextBackgroundColorPressed ||
          globalTheme.ButtonSecondaryTextBackgroundColorPressed,
      ],
    },
    terteary: {
      backgroundColor: [
        localTheme.BackgroundColor || globalTheme.ButtonTertearyBackgroundColor,
        localTheme.BackgroundColorPressed ||
          globalTheme.ButtonTertearyBackgroundColorPressed,
      ],
      color: [
        localTheme.TextBackgroundColor ||
          globalTheme.ButtonTertearyTextBackgroundColor,
        localTheme.TextBackgroundColorPressed ||
          globalTheme.ButtonTertearyTextBackgroundColorPressed,
      ],
    },
  };

  const animationPressableStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[type].backgroundColor
    );

    return { backgroundColor };
  });

  const animationTextStyles = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      progress.value,
      [0, 1],
      interpolationByTypeLookup[type].color
    );

    return { color: textColor };
  });

  React.useEffect(() => {
    if (!pressed) {
      progress.value = withTiming(0, {
        duration: globalTheme.ButtonAnimationDuration,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: globalTheme.ButtonAnimationDuration * 0.75,
        easing: Easing.ease,
      });
    }
  });

  const styles = makeStyles(globalTheme, type, size);

  const TextElement =
    typeof children === 'string'
      ? ({ children: child }: { children: React.ReactNode }) => (
          <Animated.Text
            style={[
              styles.text,
              disabled ? styles.textDisabled : animationTextStyles,
              localStyles.text,
            ]}>
            {child}
          </Animated.Text>
        )
      : React.Fragment;

  return (
    <Pressable
      onPressIn={!disabled ? () => setPressed(true) : undefined}
      onPressOut={!disabled ? () => setPressed(false) : undefined}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
      style={localStyles.wrapper}
      accessibilityLabel={accessibilityLabel}
      {...rest}>
      <Animated.View
        style={[
          styles.pressable,
          disabled ? styles.pressableDisabled : animationPressableStyles,
          localStyles.pressable,
        ]}>
        <TextElement>{children}</TextElement>
      </Animated.View>
    </Pressable>
  );
};
