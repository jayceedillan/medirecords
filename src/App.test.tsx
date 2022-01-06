import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { multipleByTwo } from './App';

test('renders Intro Text', () => {
  render(<App />);
  const mediText = screen.getByText(/Medirecords Front end Code Challenge/i);
  const pleaseText = screen.getByText(/Please try to implement following within one hour/i);
  expect(mediText).toBeInTheDocument();
  expect(pleaseText).toBeInTheDocument();

});


test('Validate result for inputted value', ()=> {
  const result = multipleByTwo('3,4,5,6');
  console.log(result);
  expect([6,8,10,12]).toEqual(result);
})