import { keys as cms } from '@loop/cms/keys';
import { keys as email } from '@loop/email/keys';
import { keys as flags } from '@loop/feature-flags/keys';
import { keys as core } from '@loop/next-config/keys';
import { keys as observability } from '@loop/observability/keys';
import { keys as rateLimit } from '@loop/rate-limit/keys';
import { keys as security } from '@loop/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    cms(),
    core(),
    email(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
