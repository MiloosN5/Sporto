// components
import Carousel from '../components/Carousel';
import Section from '../components/helpers/Section';
import Heading from '../components/helpers/Heading';
import NoRecords from '../components/feedbacks/NoRecords';
import LicenseInfo from '../components/links/LicenseInfo';

// types
import { Route } from '../types/route';

const SportsCarouselSection = ({ data }: { data: Route[] | undefined }) => {

  return (
    <Section
      blockPrefix="carousel"
      modifier="sports"
      headerChildren={
        <Heading
          level={2}
          title="Pick a sport"
          visibleTitle={true}
        />
      }
      contentChildren={
        data ? (
          <>
            <Carousel
              parent="carousel-section--sports"
              blockPrefix="carousel"
              level={3}
              data={data}
              page="home"
            />
            <LicenseInfo
              parent='carousel-section--sports'
              author={data[0].thumbnail?.license?.author || ''}
              authorURL={data[0].thumbnail?.license?.authorURL || ''}
              license={data[0].thumbnail?.license?.license || ''}
              licenseURL={data[0].thumbnail?.license?.licenseURL || ''}
              platform={data[0].thumbnail?.license?.platform || ''}
              platformURL={data[0].thumbnail?.license?.platformURL || ''}
              count={6}
            />
          </>
        ) : (
          <NoRecords parent="carousel-section--sports" />
        )
      }
    />
  );
};

export default SportsCarouselSection;
