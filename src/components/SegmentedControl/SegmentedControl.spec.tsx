import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SegmentedControl } from './SegmentedControl';

describe('SegmentedControl', () => {
  it('renders the correct number of segments', () => {
    const labels = ['Segment 1', 'Segment 2', 'Segment 3'];
    const { queryAllByTestId } = render(
      <SegmentedControl labels={labels} onValueChange={jest.fn()} />
    );
    const segments = queryAllByTestId('segment');
    expect(segments).toHaveLength(labels.length);
  });

  it('calls onValueChange when a segment is pressed', () => {
    const labels = ['Segment 1', 'Segment 2'];
    const onValueChange = jest.fn();
    const { queryAllByTestId } = render(
      <SegmentedControl labels={labels} onValueChange={onValueChange} />
    );
    fireEvent.press(queryAllByTestId('segment')[1]);
    expect(onValueChange).toHaveBeenCalledWith(labels[1]);
  });
});
