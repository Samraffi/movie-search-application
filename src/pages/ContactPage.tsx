import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/forms/InputField';
import TextareaField from '../components/forms/TextareaField';
import RadioGroup from '../components/forms/RadioGroup';

const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'Minimum 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Minimum 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  subject: Yup.string()
    .oneOf(['general', 'technical', 'feedback'], 'Please select a subject')
    .required('Subject is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Minimum 10 characters')
});

const ContactPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: 'general',
    message: ''
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log('Form submitted:', values);
    // TODO: Implement form submission
  };

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <Formik
          initialValues={initialValues}
          validationSchema={contactValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="First Name"
                  name="firstName"
                  type="text"
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>

              <InputField
                label="Email"
                name="email"
                type="email"
              />

              <RadioGroup
                label="Subject"
                name="subject"
                options={subjectOptions}
              />

              <TextareaField
                label="Message"
                name="message"
                rows={5}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-50"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactPage;
