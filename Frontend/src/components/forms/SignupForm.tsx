// react
import { ChangeEvent, FormEvent, useState } from 'react'

// plugins
import axios from 'axios';

// components
import FormField from './FormField';
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';

interface SignupData {
    password: string;
    email: string;
}

const SignupForm = () => {

    const [formData, setFormData] = useState<SignupData>({ password: '', email: '' });
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Change Event
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (name === 'email') {
            setErrorEmail(!regexEmail.test(value));
        }
        if (name === 'password') {
            setErrorPass(value.length < 4);
        }
    };

    // Asynchronously check form validation
    const isValid = () => {
        return formData.password && formData.email && !errorEmail && !errorPass;
    };

    // Submit Event
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid()) {
            try {
                const response = await axios.post('/api/signup', formData);

                if (response.status === 201) {
                    setMessage({ content: 'Signup successful! Please, verify your email!', type: 'success' });
                    setFormData({ password: '', email: '' });
                } else {
                    setMessage({ content: 'Signup failed.', type: 'fail' });
                }
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.status === 409) {
                        setMessage({ content: `User already exist.`, type: 'fail' });
                    } else {
                        setMessage({ content: `Network error: ${error}`, type: 'fail' });
                    };
                };
            };
        };
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='form--signup'
        >
            <FormField
                parent='form--signup'
                label='Email'
                id='email-signup'
                name='email'
                type='input-email'
                placeholder='Email'
                value={formData.email}
                handleChange={handleChange}
            />
            {errorEmail && <FeedbackMessage message={{ content: "Email is not valid", type: "invalid" }} />}
            <FormField
                parent='form--signup'
                label='Password'
                id='password-signup'
                name='password'
                type='input-password'
                placeholder='Password'
                value={formData.password}
                handleChange={handleChange}
            />
            {errorPass && <FeedbackMessage message={{ content: "Password  must be at least 4 chars long", type: "invalid" }} />}
            <button
                type="submit"
                disabled={!isValid()}
            >
                Signup
            </button>
            {message && <FeedbackMessage message={message} />}
        </form>
    );
};

export default SignupForm;