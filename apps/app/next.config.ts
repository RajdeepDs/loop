import { env } from '@/env';
import { withToolbar } from '@loop/feature-flags/lib/toolbar';
import { config, withAnalyzer } from '@loop/next-config';
import { withLogtail, withSentry } from '@loop/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withToolbar(withLogtail({ ...config }));

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
