// react
import { ChangeEvent, FormEvent, useState } from 'react'

// plugins
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// components
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';
import FormField from './FormField';

interface ResetPasswordFormProps {
    token: string;
}

interface ResetPasswordData {
    newPassword: string;
};

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<ResetPasswordData>({ newPassword: '' });
    const [errorNewPassword, setErrorNewPassword] = useState(false);
    const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

    // Change Event
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (name === 'newPassword') {
            setErrorNewPassword(value.length < 4);
        }
    };

    // Asynchronously check form validation
    const isValid = () => {
        return formData.newPassword && !errorNewPassword;
    };

    // Submit Event
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!token) {
            setMessage({ content: 'Invalid or expired reset link', type: 'fail' });
            return;
        }

        const newPassword = formData.newPassword;

        if (isValid()) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/reset-password`, {
                    token,
                    newPassword
                });

                if (response.status === 200) {
                    setMessage({ content: 'Password successfully reset!', type: 'success' });
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                }
            } catch (error) {
                setMessage({ content: `Network error: ${error}`, type: 'fail' });
            };
        };
    };

    return (
        <form
            className={`form--resetPassword`}
            onSubmit={handleSubmit}
        >
            <FormField
                parent='form--resetPassword'
                label="New Password"
                id="name-resetPassword"
                name="newPassword"
                type="input-password"
                placeholder="Your new password..."
                value={formData.newPassword}
                handleChange={handleChange}
            />
            {errorNewPassword && <FeedbackMessage message={{ content: "Password must be at least 4 chars long", type: "invalid" }} />}
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

export default ResetPasswordForm;