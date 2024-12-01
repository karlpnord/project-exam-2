import * as yup from 'yup';

export interface LoginFormDataProps {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const loginFormSchema = yup
  .object()
  .shape({
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
    rememberMe: yup.boolean().optional(),
  })
  .required();
