import { createContext } from 'react'

export type CarouselSettings = {
  itemsToShow: number
  itemsToScroll: number
  speed: number
  setItemsToScroll: (items: number) => void
  setItemsToShow: (items: number) => void
  setSpeed: (speed: number) => void
}

export const defaultContext: CarouselSettings = {
  itemsToShow: 5,
  itemsToScroll: 5,
  speed: 500,
  setItemsToScroll: () => null,
  setItemsToShow: () => null,
  setSpeed: () => null,
}

export default createContext(defaultContext)
