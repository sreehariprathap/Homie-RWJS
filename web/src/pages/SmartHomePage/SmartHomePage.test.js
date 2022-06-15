import { render } from '@redwoodjs/testing/web'

import SmartHomePage from './SmartHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SmartHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmartHomePage />)
    }).not.toThrow()
  })
})
