// react
import { useEffect, useState } from 'react';

// plugins
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import FeedbackMessage, { FeedbackMessageProps } from '../components/feedbacks/FeedbackMessage';
import Page from '../components/helpers/Page';
import Heading from '../components/helpers/Heading';
import Section from '../components/helpers/Section';
import Anchor from '../components/links/Anchor';

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (!token) {
          setMessage({ content: "Invalid verification link", type: "fail" });
          return;
        }

        const response = await axios.get(`/api/verify-email?token=${token}`);
        setMessage({ content: response.data.message, type: "success" });
      } catch (error) {
        setMessage({ content: "Verification failed", type: "fail" });
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <Page blockPrefix='verifyEmail'>
      <Section
        blockPrefix='verifyEmail'
        headerChildren={
          <Heading
            title='Verify Email Feedback'
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
                URL='/login'
                title="LOGIN"
              />
            </p>
          </>
        }
      />
    </Page>
  );
};

export default VerifyEmailPage;


