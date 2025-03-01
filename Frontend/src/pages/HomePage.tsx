// react
import { useEffect, useRef, useState } from 'react';

// plugins
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

// components
import Separator from '../components/helpers/Separator';
import HeroSection from '../sections/HeroSection';
import SportsCarouselSection from '../sections/SportsCarouselSection';
import ConnectSection from '../sections/ConnectSection';
import { SectionRef } from '../components/helpers/Section';
import Page from '../components/helpers/Page';

// types
import { Route } from '../types/route';
import { Data } from '../types/data';

const HomePage = () => {
  
  const { pageRoutes } = useRouteLoaderData('pageLayout') as { pageRoutes: Route[] }
  const { heroData } = useLoaderData() as { heroData: Data[] }

  const sportRoute = pageRoutes.find(route => route.name === 'sports');
  const sports = sportRoute?.children

  const [clientRect, setClientRect] = useState<DOMRect | null>(null);
  const connectRef = useRef<SectionRef>(null);

  // Get the element's position relative to the viewport
  const updateClientRect = () => {
    if (connectRef.current?.sectionRef) {
      setClientRect(connectRef.current?.sectionRef.getBoundingClientRect());
    }
  };

  // Show 'ConnectionSection' based on user scroll position
  useEffect(() => {
    window.addEventListener('scroll', updateClientRect);

    if (clientRect && connectRef.current?.sectionRef && clientRect.top < window.innerHeight) {
      connectRef.current.sectionRef.style.maxHeight = `${300 / 16 }rem`;
    }

    return () => window.removeEventListener('scroll', updateClientRect);
  }, [clientRect]);

  return (
    <Page blockPrefix='home'>
      <HeroSection data={heroData} />
      <Separator />
      <SportsCarouselSection data={sports} />
      <Separator />
      <ConnectSection ref={connectRef} />
      <Separator />
    </Page>
  );
};

export default HomePage;
