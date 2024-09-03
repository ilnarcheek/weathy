interface ImportMetaEnv {
  readonly VITE_SEARCH_API_KEY: string;
  readonly VITE_TIMEZONE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
