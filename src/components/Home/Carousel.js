import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel({ images }) {
  let items = images.map((image) => {
    return (
      <div className="tc mt4 mt5-m mb0-ns mb5">
        <Link className="dim" to={image.project}>
          <img src={image.src} alt="scroll down" />
        </Link>
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
