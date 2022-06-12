import { memo, SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25.328 16.17H6.7M16.014 25.483 6.7 16.17l9.314-9.314'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
