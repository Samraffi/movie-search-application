export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: 'general' | 'uiux' | 'brand';
  message: string;
}
