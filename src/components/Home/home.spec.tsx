import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home component', () => {
  it('should display properly with translation key', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('welcome')
  })
})
