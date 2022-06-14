export interface ItemProps {
  id: string
  image: string
  title: string
}

const CarouselItem = (props: ItemProps) => {
  const { image, title } = props

  return (
    <div className="carousel-item">
      <img src={image} alt={title} />
      {/* <h2>{item.title}</h2> */}
    </div>
  )
}

export default CarouselItem
