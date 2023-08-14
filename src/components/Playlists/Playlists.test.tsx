import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Playlists from './Playlists';

describe('<Playlists />', () => {
  test('it should mount', () => {
    render(<Playlists />);
    
    const playlists = screen.getByTestId('Playlists');

    expect(playlists).toBeInTheDocument();
  });
});