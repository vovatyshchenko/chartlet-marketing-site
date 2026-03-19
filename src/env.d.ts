/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ANALYTICS_ID?: string;
  readonly PUBLIC_DOWNLOAD_URL?: string;
  readonly PUBLIC_PRO_EXPLORE_URL?: string;
  readonly PUBLIC_NETLIFY_FORM_NAME?: string;
  readonly PUBLIC_SITE_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
