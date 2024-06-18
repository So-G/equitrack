import React from 'react'
import { render, screen } from '@testing-library/react'
import Dummy from './Dummy'

describe('Error component', () => {
  it('should display properly the dummy page', () => {
    render(<Dummy />)
    expect(screen.getByText('Dummy')).toBeTruthy()
  })
})
