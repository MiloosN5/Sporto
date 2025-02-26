import SignupForm from '../components/forms/SignupForm'
import Heading from '../components/helpers/Heading'
import Section from '../components/helpers/Section'

const SignupSection = () => {
    return (
        <Section
            blockPrefix='signup'
            headerChildren={
                <Heading
                    level={2}
                    title="Signup"
                    visibleTitle={true}
                />
            }
            contentChildren={
                <SignupForm />
            }
        />
    );
};

export default SignupSection;