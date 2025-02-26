import { useSearchParams } from 'react-router-dom';
import Page from '../components/helpers/Page';
import ResetPasswordSection from '../sections/ResetPasswordSection';

const ResetPasswordPage = () => {

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  return (
    <Page blockPrefix='resetPassword'>
      <ResetPasswordSection token={token} />
    </Page>
  );
};

export default ResetPasswordPage;