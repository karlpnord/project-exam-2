import {
  UseFormRegister,
  FieldError,
  UseFormHandleSubmit,
  DeepPartial,
} from 'react-hook-form';
import { ReactNode } from 'react';
import { AddVenueFormProps } from '../components/forms/validations/addVenueFormSchema';

export interface FormFieldProps {
  label: string | ReactNode;
  id: string;
  error?: string;
  hidden: boolean;
  register: ReturnType<UseFormRegister<AddVenueFormProps>>;
}

export interface InputProps extends FormFieldProps {
  type: 'text' | 'number' | 'url';
  placeholder: string;
}

export interface CheckboxProps extends Omit<FormFieldProps, 'hidden'> {
  checked: boolean;
}

export interface TextareaProps extends Omit<FormFieldProps, 'type'> {
  placeholder: string;
}

export interface FormProps {
  register: UseFormRegister<AddVenueFormProps>;
  handleSubmit: UseFormHandleSubmit<AddVenueFormProps>;
  errors: {
    [K in keyof AddVenueFormProps]?: FieldError;
  };
  venueData: DeepPartial<AddVenueFormProps>;
}
