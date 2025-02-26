import Page from '../components/helpers/Page'
import Section from '../components/helpers/Section'
import Heading from '../components/helpers/Heading'

const NewsPage = () => {
  return (
    <Page blockPrefix='news'>
      <Section
        blockPrefix='news'
        headerChildren={
          <Heading
            visibleTitle={true}
            title="News"
            level={2}
          />
        }
      />
    </Page>
  );
};

export default NewsPage;