import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SegmentedControl } from './SegmentedControl';

describe('SegmentedControl', () => {
  it('renders the correct number of segments', () => {
    const labels = ['Segment 1', 'Segment 2', 'Segment 3'];
    const { queryAllByText } = render(
      <SegmentedControl labels={labels} onChange={jest.fn()} />
    );
    const segments = queryAllByText(/Segment/);
    expect(segments).toHaveLength(labels.length);
  });

  it('calls onChange when a segment is pressed', () => {
    const labels = ['Segment 1', 'Segment 2'];
    const onChange = jest.fn();
    const { queryAllByText } = render(
      <SegmentedControl labels={labels} onChange={onChange} />
    );
    fireEvent.press(queryAllByText(/Segment/)[1]);
    expect(onChange).toHaveBeenCalledWith(labels[1]);
  });
});
