import Section from '../components/helpers/Section'
import Heading from '../components/helpers/Heading'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'

interface ResetPasswordSectionProps {
    token: string;
}

const ResetPasswordSection = ({ token }: ResetPasswordSectionProps) => {
    return (
        <Section
            blockPrefix='resetPassword'
            headerChildren={
                <Heading
                    level={2}
                    title="Reset Password"
                    visibleTitle={true}
                />
            }
            contentChildren={
                <ResetPasswordForm token={token} />
            }
        />
    );
};

export default ResetPasswordSection;