import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './NavBar'

test('renders the main header', () => {
  const { getByTestId } = render(<NavBar />)
  const navElement = getByTestId('main-nav')
  expect(navElement).toBeInTheDocument()
})
