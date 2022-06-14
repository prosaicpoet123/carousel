import { useContext } from 'react'

import SettingsContext, {
  CarouselSettings,
} from '../../context/SettingsContext/SettingsContext'

export default function useSettingsContext(): CarouselSettings {
  return useContext(SettingsContext)
}
