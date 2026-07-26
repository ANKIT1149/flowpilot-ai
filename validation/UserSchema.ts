import z from 'zod';

export const UserSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .max(30, { message: 'Name must be at most 30 characters long.' }),
  email: z.email({ message: 'Please enter a valid email address.' }).nonempty(),
  image: z.url({ message: 'Image must be a valid URL.' }),
});
