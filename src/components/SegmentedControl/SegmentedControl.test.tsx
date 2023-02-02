import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SegmentedControl } from './SegmentedControl';

describe('SegmentedControl', () => {
  it('renders the correct number of segments', () => {
    const labels = ['Segment 1', 'Segment 2', 'Segment 3'];
    const { queryAllByText } = render(
      <SegmentedControl labels={labels} onValueChange={jest.fn()} />
    );
    const segments = queryAllByText(/Segment/);
    expect(segments).toHaveLength(labels.length);
  });

  it('calls onValueChange when a segment is pressed', () => {
    const labels = ['Segment 1', 'Segment 2'];
    const onValueChange = jest.fn();
    const { queryAllByText } = render(
      <SegmentedControl labels={labels} onValueChange={onValueChange} />
    );
    fireEvent.press(queryAllByText(/Segment/)[1]);
    expect(onValueChange).toHaveBeenCalledWith(labels[1]);
  });
});
