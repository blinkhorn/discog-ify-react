import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDetail from './UserDetail';

describe('<UserDetail />', () => {
  test('it should mount', () => {
    render(<UserDetail />);
    
    const userDetail = screen.getByTestId('UserDetail');

    expect(userDetail).toBeInTheDocument();
  });
});