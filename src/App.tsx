import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel/index";
import CarouselItem, { ItemProps } from "./components/CarouselItem/index";

import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = require('./styles/styles.css')
const list = require('./data/list')

export default class App extends React.Component {
  render() {
    return (
      <Carousel
        itemsToShow={5} // number of items to show by default
        itemsToScroll={5} // number of items to scroll by on click
        speed={500} // speed of the animation in milliseconds
        responsive={[
          {
            breakpoint: 580,
            settings: {
              itemsToShow: 1,
              itemsToScroll: 1
            }
          },
          {
            breakpoint: 700,
            settings: {
              itemsToShow: 2,
              itemsToScroll: 2
            }
          }
        ]}
      >
        {list.map((item: ItemProps) => (
          <CarouselItem {...item} />
        ))}
      </Carousel>
    );
  }
}
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
