// react
import React, { useRef, useEffect, useState } from 'react'

// components
import Skipping from './navs/Skipping';
import Heading from './helpers/Heading';
import Article from './helpers/Article';
import Anchor from './links/Anchor';

// types
import { Route } from '../types/route';

// icons
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

interface CarouselProps {
  parent: string;
  blockPrefix: string;
  modifier?: string;
  page: string
  level: number;
  data: any[];
}

const Carousel = ({
  parent,
  blockPrefix,
  modifier,
  level,
  data,
  page
}: CarouselProps) => {

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [mouseStartX, setMouseStartX] = useState<number>(0);
  const [startScrollLeft, setStartScrollLeft] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);

  const carouselRef = useRef<HTMLUListElement | null>(null);
  const cardRef = useRef<HTMLLIElement | null>(null);

  // get Card width
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  // start Carousel moving (with controlers)
  const movingCarousel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!carouselRef.current) return;

    const classLeft = e.currentTarget.classList.contains('carousel-article__controls--left');
    carouselRef.current.scrollLeft += classLeft ? -cardWidth : cardWidth;
  };

  // start Carousel moving (with mouse drag)
  const dragStart = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    if (carouselRef.current) {
      carouselRef.current.classList.add('dragging');
    }
    setMouseStartX(e.pageX);
    setStartScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const dragging = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging || !carouselRef.current) return;

    const distanceMoved = (e.pageX - mouseStartX) / 2;
    carouselRef.current.scrollLeft = startScrollLeft - distanceMoved;
  };

  // stop Carousel moving
  useEffect(() => {
    document.addEventListener('mouseup', dragStop);
    return () => document.removeEventListener('mouseup', dragStop);
  }, []);

  const dragStop = () => {
    setIsDragging(false);
    if (carouselRef.current?.classList.contains('dragging')) {
      carouselRef.current.classList.remove('dragging');
    }
  };

  return (
    <Article
      parent={parent}
      blockPrefix={blockPrefix}
      modifier={modifier}
      headerChildren={
        <Heading
          level={level}
          title="Carousel"
          visibleTitle={false}
        />
      }
      contentChildren={
        <>
          <Skipping
            href={`#after-${page}-${parent}-${blockPrefix}`}
            content="Skip Carousel Controls"
          />
          <ul
            ref={carouselRef}
            className={`${blockPrefix}-article__cards`}
            onMouseMove={dragging}
            onMouseDown={dragStart}
          >
            {data.map(({ name, URL, thumbnail }: Route, index: number) => (
              <li
                ref={index === 0 ? cardRef : null}
                key={index}
                className={`${blockPrefix}-article__card`}
              >
                <Heading
                  level={level + 1}
                  title={name}
                  visibleTitle={true}
                />
                <div className={`${blockPrefix}-article__img`}>
                  {thumbnail && typeof thumbnail.src === "function" && <thumbnail.src />}
                </div>
                <div className={`${blockPrefix}-article__viewmore`}>
                  <Anchor
                    type="filled"
                    URL={URL}
                    title="VIEW"
                  />
                </div>
              </li>
            ))}
          </ul>
          <button
            className={`${blockPrefix}-article__controls--left`}
            onClick={movingCarousel}
          >
            <ArrowBigLeft />
          </button>
          <button
            className={`${blockPrefix}-article__controls--right`}
            onClick={movingCarousel}
          >
            <ArrowBigRight />
          </button>
          <div id={`after-${page}-${parent}-${blockPrefix}`} />
        </>
      }
    />
  );
};

export default Carousel;