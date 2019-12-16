import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the main header', () => {
  const { getByTestId } = render(<App />)
  const titleElement = getByTestId('jumbo-title')
  expect(titleElement).toBeInTheDocument()
})
