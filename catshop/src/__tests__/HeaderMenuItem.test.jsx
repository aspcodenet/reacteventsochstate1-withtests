import { render, screen } from '@testing-library/react';

import App from '../App.jsx';
import { HeaderMenuItem } from '../components/HeaderMenuItem.jsx';

describe('HeaderMenuItem', () => {
    it('renders text', () => {
      render(<HeaderMenuItem text="Stefan" />);
  
      expect(screen.getByRole('link')).toHaveTextContent('Stefan')
  
      // check if App components renders headline
    });
  });