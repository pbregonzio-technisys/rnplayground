import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button onPress={() => {}}>Click me</Button>);

    expect(getByText('Click me')).toBeDefined();
  });

  it('calls onPress prop when pressable is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button onPress={onPress}>Click me</Button>);

    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalled();
  });

  it('does not trigger onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button onPress={onPress} disabled>
        Button
      </Button>
    );
    const button = getByText('Button');

    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });
});
