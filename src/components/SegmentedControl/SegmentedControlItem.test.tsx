import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SegmentedControlItem } from './SegmentedControlItem';
import { theme } from './theme';

describe('SegmentedControlItem', () => {
  it('renders the correct label', () => {
    const label = 'Segment 1';
    const { getByText } = render(
      <SegmentedControlItem label={label} onPress={jest.fn()} />
    );
    expect(getByText(label)).toBeDefined();
  });

  it('calls onPress when the item is pressed', () => {
    const label = 'Segment 1';
    const onPress = jest.fn();
    const { getByText } = render(
      <SegmentedControlItem label={label} onPress={onPress} />
    );
    fireEvent.press(getByText(label));
    expect(onPress).toHaveBeenCalled();
  });

  it('renders with the correct styles when selected', () => {
    const label = 'Segment 1';
    const { getByTestId } = render(
      <SegmentedControlItem label={label} onPress={jest.fn()} selected />
    );
    const item = getByTestId(label);
    expect(item.props.style).toContainEqual({
      backgroundColor: theme.SegmentedControlItemBackgroundColorSelected,
    });
  });

  it('renders with the correct styles when not selected', () => {
    const label = 'Segment 1';
    const { getByTestId } = render(
      <SegmentedControlItem label={label} onPress={jest.fn()} />
    );
    const item = getByTestId(label);
    expect(item.props.style).toContainEqual({
      backgroundColor: theme.SegmentedControlItemBackgroundColor,
    });
  });

  it('does not trigger onPress when disabled', () => {
    const onPress = jest.fn();
    const label = 'Segment 1';
    const { getByText } = render(
      <SegmentedControlItem
        onPress={onPress}
        disabled
        label="SegmentedControlItem"
      />
    );
    const item = getByText(label);
    fireEvent.press(item);
    expect(onPress).not.toHaveBeenCalled();
  });
});
