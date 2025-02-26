// react
import { useState, ChangeEvent, FormEvent } from 'react';

// plugins
import axios from 'axios';

// components
import FormField from './FormField';
import FeedbackMessage, { FeedbackMessageProps } from '../feedbacks/FeedbackMessage';

// hooks
import { useFocusContext } from '../../hooks/useFocusContext';

interface SubscribeData {
  name: string;
  email: string;
};

const SubscribeForm = () => {

  const [formData, setFormData] = useState<SubscribeData>({ name: '', email: '' });
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [message, setMessage] = useState<FeedbackMessageProps["message"] | null>(null);

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Change Event
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === 'email') {
      setErrorEmail(!regexEmail.test(value));
    };

    if (name === 'name') {
      setErrorName(value.length < 2);
    };
  };

  // Asynchronously check form validation
  const isValid = () => {
    return formData.name && formData.email && !errorEmail && !errorName;
  };

  // Submit Event
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/subscribe`, formData);

        if (response.status === 200) {
          console.log('Subscribed successfully', response);
          setMessage({ content: 'Subscribed successful!y', type: 'success' });
          setFormData({ name: '', email: '' });
        } else {
          setMessage({ content: 'Error subscribing', type: 'fail' });
        }
      } catch (error) {
        setMessage({ content: `Network error: ${error}`, type: 'fail' });
      };
    };
  };

  const { setFocus } = useFocusContext();
  const handleFocus = () => setFocus('subscribe', true);
  const handleBlur = () => setFocus('subscribe', false);

  return (
    <form
      className="form--subscribe"
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <FormField
        parent='form--subscribe'
        label="Name"
        id="name-subscribe"
        name="name"
        type="input-text"
        placeholder="Type your name..."
        value={formData.name}
        handleChange={handleChange}
      />
      {errorName && <FeedbackMessage message={{ content: "Name must be at least 2 chars long", type: "invalid" }} />}
      <FormField
        parent="form--subscribe"
        label="Email"
        id="email-subscribe"
        name="email"
        type="input-text"
        placeholder="Type your email..."
        value={formData.email}
        handleChange={handleChange}
      />
      {errorEmail && <FeedbackMessage message={{ content: "Email is not valid", type: "invalid" }} />}
      <button
        type="submit"
        disabled={!isValid()}
      >
        Subscribe
      </button>
      {message && <FeedbackMessage message={message} />}
    </form>
  );
};

export default SubscribeForm;
