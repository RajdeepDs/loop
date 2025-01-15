import { keys as analytics } from '@loop/analytics/keys';
import { keys as auth } from '@loop/auth/keys';
import { keys as database } from '@loop/database/keys';
import { keys as email } from '@loop/email/keys';
import { keys as core } from '@loop/next-config/keys';
import { keys as observability } from '@loop/observability/keys';
import { keys as payments } from '@loop/payments/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
