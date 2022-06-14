import { useState } from 'react'
import SettingsContext from './SettingsContext'

interface SettingsProviderProps {
  children: React.ReactElement
}

const SettingsProvider = (props: SettingsProviderProps) => {
  const { children } = props

  const [itemsToScroll, setItemsToScroll] = useState<number>(5)
  const [itemsToShow, setItemsToShow] = useState<number>(5)
  const [speed, setSpeed] = useState<number>(500)

  const shouldSetItemsToScroll = (items: number) => {
    if (items) setItemsToScroll(items)
  }

  const shouldSetItemsToShow = (items: number) => {
    if (items) setItemsToShow(items)
  }

  const shouldSetSpeed = (speed: number) => {
    if (speed) setSpeed(speed)
  }

  return (
    <SettingsContext.Provider
      value={{
        itemsToScroll,
        itemsToShow,
        speed,
        setItemsToScroll: shouldSetItemsToScroll,
        setItemsToShow: shouldSetItemsToShow,
        setSpeed: shouldSetSpeed,
      }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
