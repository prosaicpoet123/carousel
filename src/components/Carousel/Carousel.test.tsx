import { act, fireEvent, render } from '@testing-library/react'
import { flushPromises } from '../../utils/flushPromises'
import Carousel from './Carousel'

describe('<Carousel />', () => {
  let children: string[] = []
  let mockCallback: any

  beforeEach(() => {
    children = ['a', 'b', 'c']

    mockCallback = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  })

  describe('mounting', () => {
    it('mounts successfully', () => {
      expect(() => render(<Carousel />)).not.toThrow()
    })

    it('unmounts successfully', () => {
      const { unmount } = render(<Carousel />)
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('children', () => {
    it('renders the correct number of children', async () => {
      const { findAllByText } = render(
        <Carousel>
          {children.map((i) => (
            <div key={i}>{`Item`}</div>
          ))}
        </Carousel>,
      )

      const foundChildren = await findAllByText('Item')
      expect(foundChildren.length).toEqual(children.length)
    })
  })

  describe('back button', () => {
    it('should render correctly', () => {
      const { findByText } = render(
        <Carousel>
          {children.map((i) => (
            <div key={i}>{`Item`}</div>
          ))}
        </Carousel>,
      )

      expect(findByText('Back')).toBeTruthy()
    })

    it('calls the passed function', async () => {
      const { findByText } = render(
        <Carousel onBack={mockCallback}>
          {children.map((i) => (
            <div key={i}>{`Item`}</div>
          ))}
        </Carousel>,
      )

      const next = await findByText('Next')
      fireEvent.click(next)

      await act(() => flushPromises())

      const clickable = await findByText('Back')
      fireEvent.click(clickable)

      expect(mockCallback).toBeCalledTimes(1)
    })
  })

  describe('next button', () => {
    it('should render', () => {
      const { findByText } = render(
        <Carousel>
          {children.map((i) => (
            <div key={i}>{`Item`}</div>
          ))}
        </Carousel>,
      )

      expect(findByText('Next')).toBeTruthy()
    })

    it('calls the passed function', async () => {
      const { findByText } = render(
        <Carousel onNext={mockCallback}>
          {children.map((i) => (
            <div key={i}>{`Item`}</div>
          ))}
        </Carousel>,
      )

      const next = await findByText('Next')
      fireEvent.click(next)

      await act(() => flushPromises())

      expect(mockCallback).toBeCalledTimes(1)
    })
  })
})
