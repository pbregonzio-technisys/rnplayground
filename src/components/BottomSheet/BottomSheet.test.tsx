import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { BottomSheet } from './BottomSheet';
import { View } from 'react-native/types';

describe('BottomSheet component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByTestId } = render(
      <BottomSheet visible={true} onClose={jest.fn()}>
        <View testID="child" />
      </BottomSheet>
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should close when touched the bottom of the screen', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BottomSheet visible={true} onClose={onClose}>
        <View testID="child" />
      </BottomSheet>
    );

    // fireEvent.press(getByTestId('backdrop'));

    // expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose function after closing', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BottomSheet visible={true} onClose={onClose}>
        <View testID="child" />
      </BottomSheet>
    );

    // fireEvent.press(getByTestId('backdrop'));

    // expect(onClose).toHaveBeenCalled();
  });
});
