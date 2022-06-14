import { ChangeEvent } from 'react'
import useSettingsContext from '../../hooks/useSettingsContext/useSettingsContext'
import { assertUnreachable } from '../../utils/assertUnreachable'

enum InputFieldNames {
  ITEMS_TO_SHOW = 'itemsToShow',
  ITEMS_TO_SCROLL = 'itemsToScroll',
  CAROUSEL_SPEED = 'carouselSpeed',
}

const CarouselSettings = () => {
  const { setItemsToShow, setItemsToScroll, setSpeed } = useSettingsContext()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    const name = e.currentTarget.name as InputFieldNames

    switch (name) {
      case InputFieldNames.ITEMS_TO_SHOW:
        setItemsToShow(value)
        break
      case InputFieldNames.ITEMS_TO_SCROLL:
        setItemsToScroll(value)
        break
      case InputFieldNames.CAROUSEL_SPEED:
        setSpeed(value)
        break
      default:
        assertUnreachable(name)
    }
  }

  return (
    <div className="carousel-settings">
      <fieldset>
        <input
          defaultValue="5"
          type="number"
          name={InputFieldNames.ITEMS_TO_SHOW}
          onChange={handleOnChange}
        />
        <input
          defaultValue="5"
          type="number"
          name={InputFieldNames.ITEMS_TO_SCROLL}
          onChange={handleOnChange}
        />
        <input
          defaultValue="500"
          step="100"
          type="number"
          name={InputFieldNames.CAROUSEL_SPEED}
          onChange={handleOnChange}
        />
      </fieldset>
    </div>
  )
}

export default CarouselSettings
