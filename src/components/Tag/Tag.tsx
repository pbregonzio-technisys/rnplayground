import * as React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { theme } from './theme';
import type { TagPropsType } from './Tag.types';
import { makeStyles } from './Tag.styles';
import { Button } from '../Button/Button';
import { Icon } from '../Icon';

export const Tag = ({
  type = 'default',
  size = 'medium',
  styles: localStyles = {},
  theme: localTheme = {},
  children,
  onPress,
  disabled = false,
  accessibilityLabel,
  ...rest
}: TagPropsType) => {
  const [pressed, setPressed] = React.useState(false);
  const progress = useSharedValue(0);

  const interpolationByTypeLookup = {
    primary: {
      backgroundColor: [
        localTheme.BackgroundColor || theme.TagPrimaryBackgroundColor,
        localTheme.BackgroundColorPressed ||
          theme.TagPrimaryBackgroundColorPressed,
      ],
      color: [
        localTheme.TextBackgroundColor || theme.TagPrimaryTextBackgroundColor,
        localTheme.TextBackgroundColorPressed ||
          theme.TagPrimaryTextBackgroundColorPressed,
      ],
    },
    default: {
      backgroundColor: [
        localTheme.BackgroundColor || theme.TagDefaultBackgroundColor,
        localTheme.BackgroundColorPressed ||
          theme.TagDefaultBackgroundColorPressed,
      ],
      color: [
        localTheme.TextBackgroundColor || theme.TagDefaultTextBackgroundColor,
        localTheme.TextBackgroundColorPressed ||
          theme.TagDefaultTextBackgroundColorPressed,
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
        duration: theme.TagAnimationDuration,
        easing: Easing.ease,
      });
    } else {
      progress.value = withTiming(1, {
        duration: theme.TagAnimationDuration * 0.75,
        easing: Easing.ease,
      });
    }
  });

  const styles = makeStyles(theme, type, size);

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
        {/* Icono */}
        <Icon name="menu" />

        <Animated.Text
          style={[
            styles.text,
            disabled ? styles.textDisabled : animationTextStyles,
            localStyles.text,
          ]}>
          {children}
        </Animated.Text>

        {/* Accion de remover */}
        <Button onPress={() => {}}>
          <Icon name="menu" />
        </Button>
      </Animated.View>
    </Pressable>
  );
};
