// react
import { useEffect, useRef, useState } from "react";

// components
import Section, { SectionRef } from "../components/helpers/Section";
import SlideImages from "../components/SlideImages";
import NoRecords from "../components/feedbacks/NoRecords";
import Header from "../components/helpers/Header";

// hooks
import { useSizeContext } from "../hooks/useSizeContext";

// types
import { Data } from "../types/data";

const HeroSection = ({ data }: { data: Data[] | undefined }) => {
  const { remSize } = useSizeContext();
  const heroRef = useRef<SectionRef>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({
    headerHeight: 0,
  });

  // Dynamically changing Header's height
  useEffect(() => {
    const updateDimensions = () => {
      if (headerRef.current) {
        const newHeaderHeight = headerRef.current.offsetHeight;
        if (newHeaderHeight) {
          setDimensions({
            headerHeight: newHeaderHeight
          });
        }
      }
    };

    const observer = new ResizeObserver(() => updateDimensions());
    const headerElement = headerRef.current;

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => observer.disconnect();
  }, []);

  const { headerHeight } = dimensions;

  // Animated display of 'HeroSection' with a delay
  useEffect(() => {
    const heroExpand = setTimeout(() => {
      if (heroRef.current?.sectionRef) {
        heroRef.current.sectionRef.style.maxHeight = '100vh';
      }
    }, 1000);
    return () => clearTimeout(heroExpand);
  }, []);

  return (
    <Section
      ref={heroRef}
      blockPrefix="hero"
      headerChildren={
        <Header
          ref={headerRef}
          parent="hero-section"
          blockPrefix="hero"
          level={1}
          title="Get to know SPORTS"
          visibleTitle={true}
        >
          <p>Get to know some basic information about multiple different sports, all in one place.</p>
        </Header>
      }
      contentChildren={
        data && data.length > 1 ? (
          <SlideImages
            parent="hero-section"
            blockPrefix="slideImages"
            page="home"
            level={2}
            data={data}
            style={{ height: `${(headerHeight / remSize + 200 / remSize)}rem` }}
          />
        ) : (
          <NoRecords parent="hero-section" />
        )
      }
    />
  );
};

export default HeroSection;
