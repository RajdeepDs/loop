import { keys as analytics } from '@loop/analytics/keys';
import { keys as auth } from '@loop/auth/keys';
import { keys as collaboration } from '@loop/collaboration/keys';
import { keys as database } from '@loop/database/keys';
import { keys as email } from '@loop/email/keys';
import { keys as flags } from '@loop/feature-flags/keys';
import { keys as core } from '@loop/next-config/keys';
import { keys as notifications } from '@loop/notifications/keys';
import { keys as observability } from '@loop/observability/keys';
import { keys as security } from '@loop/security/keys';
import { keys as webhooks } from '@loop/webhooks/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    collaboration(),
    core(),
    database(),
    email(),
    flags(),
    notifications(),
    observability(),
    security(),
    webhooks(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
