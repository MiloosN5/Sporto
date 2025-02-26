// react
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// plugins
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// components
import FormField from './FormField';
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';

interface LoginData {
    password: string;
    email: string;
};

interface LoginFormProps {
    status: any;
}

const LoginForm = ({ status }: LoginFormProps) => {

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginData>({ password: '', email: '' });
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);
    const [isForgottenPassword, setIsForgottenPassword] = useState<boolean>(false);

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Change Event
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (name === 'email') {
            setErrorEmail(!regexEmail.test(value));
        };

        if (name === 'password') {
            setErrorPass(value.length < 4);
        };
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
                const response = await axios.post('/api/login', formData);

                if (response.status === 200) {
                    login(response.data.token, formData.email);
                    setMessage({ content: 'Login successful!', type: 'success' });
                    localStorage.setItem('token', response.data.token);
                    setFormData({ password: '', email: '' });
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 2000);
                }
            } catch (error: unknown) {
                if (axios.isAxiosError(error) && error.response) {
                    if (error.response.status === 403) {
                        setMessage({ content: "Your account is not verified. Check your email.", type: "fail" });
                    } else if (error.response.status === 401) {
                        setMessage({ content: "Invalid credentials. Try again.", type: "fail" });
                    } else {
                        setMessage({ content: `Login failed. Server returned ${error.response.status}.`, type: "fail" });
                    }
                } else {
                    setMessage({ content: 'Error: Unable to connect to the server.', type: 'fail' });
                };
            };
        };
    };

    // KeyDown Event
    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    };

    // Status of the 'ForgotPasswordForm' (show/hide)
    const toggleForm = () => {
        setIsForgottenPassword((prev) => !prev);
    };

    useEffect(() => {
        if (status) {
            status(isForgottenPassword);
        }
    }, [isForgottenPassword, status]);

    return (
        <form
            className='form--login'
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
        >
            <FormField
                parent='form--login'
                label='Email'
                id='email-login'
                name='email'
                type="input-email"
                placeholder="Email"
                value={formData.email}
                handleChange={handleChange}
            />
            {errorEmail && <FeedbackMessage message={{ content: "Email is not valid", type: "invalid" }} />}
            <FormField
                parent='form--login'
                label='Password'
                id='password'
                name='password'
                type="input-password"
                placeholder="Password"
                value={formData.password}
                handleChange={handleChange}
            />
            {errorPass && <FeedbackMessage message={{ content: "Password  must be at least 4 chars long", type: "invalid" }} />}
            <button onClick={toggleForm}>Forgot Password?</button>
            <button
                type="submit"
                disabled={!isValid()}
            >
                Login
            </button>
            {message && <FeedbackMessage message={message} />}
        </form>
    );
};

export default LoginForm;