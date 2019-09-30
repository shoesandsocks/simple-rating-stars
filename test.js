/* eslint-disable no-undef */
import React from 'react'
import {render, waitForElement } from '@testing-library/react'
import Star from './src/index'


it('renders correct # of Filled & Empty Stars', async () => {
  const { getAllByTitle } = render(<Star stars={3} outOf={5} full="#369" empty="#fff" stroke="#99EE22" />);
  const filled = await(getAllByTitle(/Filled Star/i)); // should be 3
  const empties = await(getAllByTitle(/Empty Star/i)); // should be 2
  expect(empties).toHaveLength(2)
  expect(filled).toHaveLength(3)

});

it('numbers Filled Stars correctly', async () => {
  const { getByTitle } = render(<Star stars={3} outOf={5} full="#369" empty="#fff" stroke="#99EE22" />);
  await waitForElement(() => getByTitle(/Filled Star 3/)); // there should be one with the no. 3
})

it('displays proper outOf error', async () => {
  const { getByText } = render(<Star stars={0} outOf={1} full="#369" empty="#fff" stroke="#99EE22" />);
  await waitForElement(() => getByText(/Error: "outOf" cannot be less than two/));
})

it('displays proper <0 error', async () => {
  const { getByText } = render(<Star stars={-4} outOf={5} full="#369" empty="#fff" stroke="#99EE22" />);
  await waitForElement(() => getByText(/Error: "stars" cannot be less-than-zero/));
})

it('displays proper out-of-range error', async () => {
  const { getByText } = render(<Star stars={6} outOf={5} full="#369" empty="#fff" stroke="#99EE22" />);
  await waitForElement(() => getByText(/Error: "stars" cannot exceed "outOf\."/));
})

it('displays proper no-fractions error', async () => {
  const { getByText } = render(<Star stars={0.4} outOf={5} full="#369" empty="#fff" stroke="#99EE22" />);
  await waitForElement(() => getByText(/Error: This component cannot handle fractions of stars/));
})
