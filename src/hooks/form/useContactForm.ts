import { ContactFormValues } from '../../types/contact';

export const useContactForm = () => {
  const handleSubmit = async (values: ContactFormValues) => {
    try {
      // API request will be implemented in the future
      console.log('Form submission:', values);
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  };

  const initialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  };

  return { handleSubmit, initialValues };
};
