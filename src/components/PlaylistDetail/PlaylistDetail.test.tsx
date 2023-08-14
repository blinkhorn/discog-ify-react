import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlaylistDetail from './PlaylistDetail';

describe('<PlaylistDetail />', () => {
  test('it should mount', () => {
    render(<PlaylistDetail />);
    
    const playlistDetail = screen.getByTestId('PlaylistDetail');

    expect(playlistDetail).toBeInTheDocument();
  });
});