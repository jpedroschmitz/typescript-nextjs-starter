import { z } from 'zod/v4';

import { createEnv } from '@t3-oss/env-nextjs';

export const serverEnv = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {},
});
