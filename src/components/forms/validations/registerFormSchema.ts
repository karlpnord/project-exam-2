import * as yup from 'yup';

export interface RegisterFormDataProps {
  name: string;
  email: string;
  password: string;
  termsAndConditions?: boolean;
  venueManager?: boolean;
}

export const registerFormSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, 'Username must be atleast 3 characeters')
      .required('Username is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .matches(
        /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
        'Email must be a valid @stud.noroff.no email'
      )
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
    venueManager: yup.boolean().optional(),
  })
  .required();
