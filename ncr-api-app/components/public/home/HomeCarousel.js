import React, { useState } from 'react';
import Link from 'next/link';
import { Carousel, CarouselItem, CarouselIndicators, Button } from 'reactstrap';

const items = [
  {
    src: '/images/car3.jpg',
    altText: 'Buy Cleaner Cars, Not Cleaner Homes',
    caption: 'Buy Cleaner Cars, Not Cleaner Homes',
    link: '/category/1f33d252'
  },
  {
    src: '/images/car6.jpeg',
    altText: 'Buy Cleaner Cars, Not Cleaner Homes',
    caption: 'Buy Cleaner Cars, Not Cleaner Homes',
    link: '/category/af452ca5'
  }
];

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} style={{ width: '100%', objectFit: 'cover', minHeight: '400px' }} />
        <div className="carousel-caption d-block text-left">
          <div className="container">
            <h3 className="inner-text">{item.caption}</h3>
            <Link href={"ncr-api-app/pages/finalpage1.html"}>
              <a className="btn btn-success">Try it out now!</a>
            
            </Link>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
};

export default HomeCarousel;
