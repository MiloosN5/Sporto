declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const content: string;
  export default content;
}

export interface License {
  author?: string;
  authorURL?: string;
  license?: string;
  licenseURL?: string;
  platform?: string;
  platformURL?: string;
}

export interface Resource {
  src: string | React.FC<React.SVGProps<SVGSVGElement>>,
  alt: string,
  license?: License
}

export interface ResourcesByCategory {
  label: string,
  avatar?: Resource,
  thumbnail?: Resource,
  cover?: Resource
}
