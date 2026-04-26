/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ANALYTICS_ID?: string;
  readonly PUBLIC_DOWNLOAD_URL?: string;
  readonly PUBLIC_SITE_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
