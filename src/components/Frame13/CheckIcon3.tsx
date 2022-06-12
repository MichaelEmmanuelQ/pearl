import { memo, SVGProps } from 'react';

const CheckIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.236 8.48 12.6 23.117l-6.653-6.653'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon3);
export { Memo as CheckIcon3 };
