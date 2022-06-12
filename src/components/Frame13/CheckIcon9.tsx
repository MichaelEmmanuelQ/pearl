import { memo, SVGProps } from 'react';

const CheckIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.725 8.753 12.089 23.389l-6.653-6.653'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon9);
export { Memo as CheckIcon9 };
