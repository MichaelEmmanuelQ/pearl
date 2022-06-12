import { memo, SVGProps } from 'react';

const CheckIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.203 8.15 12.567 22.786l-6.653-6.652'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon5);
export { Memo as CheckIcon5 };
