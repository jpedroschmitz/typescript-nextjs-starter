import { z } from 'zod';
import { DATABASE_URL, OPEN_AI_API_KEY } from './env';

export const serverEnv = {
  DATABASE_URL: z.string().url().parse(DATABASE_URL),
  OPEN_AI_API_KEY: z.string().min(1).parse(OPEN_AI_API_KEY),
};
