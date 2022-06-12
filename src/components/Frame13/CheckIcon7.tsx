import { memo, SVGProps } from 'react';

const CheckIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.236 8.883 12.6 23.52l-6.653-6.652'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon7);
export { Memo as CheckIcon7 };
