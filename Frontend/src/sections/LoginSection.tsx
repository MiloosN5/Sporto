// react
import { useState } from 'react';

// components
import Section from '../components/helpers/Section'
import Heading from '../components/helpers/Heading'
import LoginForm from '../components/forms/LoginForm'
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

const LoginSection = () => {
    const [isForgottenPassword, setIsForgottenPassword] = useState<boolean>(false);

    return (
        <Section
            blockPrefix='login'
            headerChildren={
                <Heading
                    level={2}
                    title="Login"
                    visibleTitle={true}
                />
            }
            contentChildren={
                <>
                    <LoginForm status={setIsForgottenPassword} />
                    <ForgotPasswordForm status={isForgottenPassword} />
                </>
            }
        />
    );
};

export default LoginSection;