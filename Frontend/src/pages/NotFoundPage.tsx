// react
import { useEffect, useState } from 'react';

// plugins
import { useRouteError } from 'react-router-dom'

// components
import Page from '../components/helpers/Page';
import Heading from '../components/helpers/Heading';
import Section from '../components/helpers/Section';
import Anchor from '../components/links/Anchor';
import FeedbackMessage, { FeedbackMessageProps } from '../components/feedbacks/FeedbackMessage';

const NotFoundPage = () => {

  const error = useRouteError();
  const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

  useEffect(() => {
    if (!error) {
      setMessage({ content: 'Page not found!', type: 'fail' });
    }
  }, [error])

  return (
    <Page blockPrefix='notFound'>
      <Section
        blockPrefix='notFound'
        headerChildren={
          <Heading
            title='Oops! Page not found.'
            visibleTitle={true}
            level={2}
          />
        }
        contentChildren={
          <>
            {message && <FeedbackMessage message={message} />}
            <p>
              <span>Go to the</span>
              <Anchor
                type="filled"
                URL='/'
                title="HOMEPAGE"
              />
            </p>
          </>
        }
      />
    </Page>
  );
};

export default NotFoundPage;

