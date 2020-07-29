import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('renders with welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hey there!')).toBeInTheDocument();
  });
});

// TODO: expand on tests