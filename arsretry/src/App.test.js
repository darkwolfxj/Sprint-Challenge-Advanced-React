import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('renders all players', async () => {
    const { getByTestId } = render(<App />);
  
    await waitForElement(() => getByTestId('testdiv'));
});
test('renders my chart', async () => {
    const { getByTestId } = render(<App />) 
    
    await waitForElement(() => getByTestId('myChart'))
})
