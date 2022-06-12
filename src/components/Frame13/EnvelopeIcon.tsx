import { memo, SVGProps } from 'react';

const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)'>
      <path
        d='M32.665 12.893a.391.391 0 0 1 .63.306v13.286a3.12 3.12 0 0 1-3.118 3.118H3.15a3.12 3.12 0 0 1-3.118-3.118v-13.28c0-.325.37-.507.63-.305 1.455 1.13 3.385 2.566 10.012 7.38 1.37 1 3.683 3.106 5.99 3.093 2.32.02 4.677-2.131 5.996-3.093 6.627-4.814 8.55-6.256 10.005-7.387Zm-16.001 8.394c1.507.026 3.677-1.897 4.768-2.69 8.622-6.256 9.278-6.802 11.266-8.36.377-.293.598-.748.598-1.229V7.774a3.12 3.12 0 0 0-3.119-3.119H3.15A3.12 3.12 0 0 0 .032 7.774v1.234c0 .48.22.93.597 1.228 1.988 1.553 2.645 2.105 11.266 8.361 1.091.793 3.261 2.716 4.769 2.69Z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.032 .497)' d='M0 0h33.264v33.264H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(EnvelopeIcon);
export { Memo as EnvelopeIcon };
