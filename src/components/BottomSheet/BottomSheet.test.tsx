import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
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
});
