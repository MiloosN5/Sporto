// react
import React, { useState, ChangeEvent, FormEvent } from 'react';

// plugins
import axios from 'axios';

// components
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';
import FormField from './FormField';

// hooks
import { useFocusContext } from '../../hooks/useFocusContext';

interface MessageData {
  email: string;
  subject: string;
  message: string;
}

const MessageForm: React.FC = () => {
  const [formData, setFormData] = useState<MessageData>({
    email: '',
    subject: '',
    message: ''
  });
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Change Event
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === 'email') {
      setErrorEmail(!regexEmail.test(value));
    }

    if (name === 'subject') {
      setErrorSubject(value.length < 2);
    }
  };

  // Asynchronously check form validation
  const isValid = () => {
    return formData.email && formData.subject && !errorEmail && !errorSubject;
  };

  // Submit Event
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/send-email`, formData);

        if (response.status === 200) {
          console.log('Message sent successfully');
          setMessage({ content: 'Message sent successful!', type: 'success' });
          setFormData({ email: '', subject: '', message: '' });
        } else {
          setMessage({ content: 'Error sending message', type: 'fail' });
        }
      } catch (error) {
        setMessage({ content: `Network error: ${error}`, type: 'fail' });
      };
    };
  };

  const { setFocus } = useFocusContext();
  const handleFocus = () => setFocus('message', true);
  const handleBlur = () => setFocus('message', false);

  return (
    <form
      className="form--message"
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <FormField
        parent="form--message"
        label="Email"
        id="email-message"
        name="email"
        type="input-text"
        placeholder="Type your email..."
        value={formData.email}
        handleChange={handleChange}
      />
      {errorEmail && <FeedbackMessage message={{ content: "Email is not valid", type: "invalid" }} />}
      <FormField
        parent="form--message"
        label="Subject"
        id="subject-message"
        name="subject"
        type="input-text"
        placeholder="Type your subject..."
        value={formData.subject}
        handleChange={handleChange}
      />
      {errorSubject && <FeedbackMessage message={{ content: 'Subject must be at least 2 chars long', type: "invalid" }} />}
      <FormField
        parent='form--message'
        label="Message"
        id="message-message"
        name="message"
        type="textarea"
        placeholder="Type your message..."
        value={formData.message}
        handleChange={handleChange}
      />
      <button
        type="submit"
        disabled={!isValid()}
      >
        Send
      </button>
      {message && <FeedbackMessage message={message} />}
    </form>
  );
};

export default MessageForm;
