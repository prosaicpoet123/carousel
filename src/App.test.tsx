import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('mounts successfully', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('unmounts successfully', () => {
    const { unmount } = render(<App />)
    expect(() => unmount()).not.toThrow()
  })
})
