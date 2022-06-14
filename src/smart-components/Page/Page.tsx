import Carousel from '../../components/Carousel'
import CarouselItem, { ItemProps } from '../../components/CarouselItem'
import useSettingsContext from '../../hooks/useSettingsContext/useSettingsContext'

import list from '../../data/list.json'
import CarouselSettings from '../../components/CarouselSettings'

const Page = () => {
  const { itemsToShow, itemsToScroll, speed } = useSettingsContext()

  return (
    <>
      <CarouselSettings />
      <Carousel
        itemsToShow={itemsToShow} // number of items to show by default
        itemsToScroll={itemsToScroll} // number of items to scroll by on click
        speed={speed} // speed of the animation in milliseconds
        responsive={[
          {
            breakpoint: 580,
            settings: {
              itemsToShow: 1,
              itemsToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              itemsToShow: 2,
              itemsToScroll: 2,
            },
          },
        ]}>
        {list.map((item: ItemProps) => (
          <CarouselItem {...item} key={item.id} />
        ))}
      </Carousel>
    </>
  )
}

export default Page
