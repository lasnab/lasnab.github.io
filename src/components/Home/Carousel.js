import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel({ images }) {
  let items = images.map((image) => {
    return (
      <div className="tc mt4 mt5-m mb0-ns mb5">
        <a className="dim" href={image.project}>
          <img src={image.src} alt="scroll down" />
        </a>
      </div>
    );
  });

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={2500}
      animationType="fadeout"
      infinite
    />
  );
}

export default Carousel;
