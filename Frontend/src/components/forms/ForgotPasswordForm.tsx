// react
import { ChangeEvent, FormEvent, useState } from 'react'

// plugins
import axios from 'axios';

// components
import FormField from './FormField';
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';

interface ForgotPasswordData {
    email: string;
};

interface ForgotPasswordFormProps {
    status: boolean;
}

const ForgotPasswordForm = ({status}: ForgotPasswordFormProps) => {

    const [formData, setFormData] = useState<ForgotPasswordData>({ email: '' });
    const [errorEmail, setErrorEmail] = useState(false);
    const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);
    
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Change Event
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (name === 'email') {
            setErrorEmail(!regexEmail.test(value));
        };
    };

    // Asynchronously check form validation
    const isValid = () => {
        return formData.email && !errorEmail;
    };

    // Submit Event
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid()) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/forgot-password`, { email: formData.email });

                if (response.status === 200) {
                    setMessage({ content: 'Password reset link sent to your email', type: 'success' });
                }
            } catch (error) {
                setMessage({ content: `Network error: ${error}`, type: 'fail' });
            };
        };
    };

    return (
        <form
            className={`form--forgotPassword ${status ? `openedForm` : `closedForm`}`}
            onSubmit={handleSubmit}
        >
            <FormField
                parent='form-forgotPassword'
                label='Email'
                id='email-forgotPassword'
                name='email'
                type="input-email"
                value={formData.email}
                handleChange={handleChange}
            />
            {errorEmail && <FeedbackMessage message={{ content: "Email is not valid", type: "invalid" }} />}
            <button
                type="submit"
                disabled={!isValid()}
            >
                Reset
            </button>
            {message && <FeedbackMessage message={message} />}
        </form>
    );
};

export default ForgotPasswordForm;