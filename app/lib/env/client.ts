import { z } from 'zod';
import { NEXT_PUBLIC_GITHUB_API_URL } from './env';

export const clientEnv = {
  NEXT_PUBLIC_GITHUB_API_URL: z
    .string()
    .url()
    .parse(NEXT_PUBLIC_GITHUB_API_URL),
};
