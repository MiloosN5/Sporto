/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER: string;
  readonly VITE_MODE: string; 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}