import React from 'react'
import { render, screen } from '@testing-library/react'
import Error from './Error'

describe('Error component', () => {
  it('should display properly the 404 page', () => {
    render(<Error />)
    expect(screen.getByText('error.message')).toBeTruthy()
  })
})
