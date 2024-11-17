import * as yup from 'yup';

export interface UpdateProfileFormProps {
  avatar?: string | null;
  banner?: string | null;
  bio?: string | null;
  venueManager?: boolean;
}

export const updateProfileFormSchema = yup.object().shape({
  avatar: yup.string().url('Invalid URL').nullable().optional(),
  banner: yup.string().url('Invalid URL').nullable().optional(),
  bio: yup.string().nullable().optional(),
  venueManager: yup.boolean().optional(),
});
