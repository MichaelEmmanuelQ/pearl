import { memo, SVGProps } from 'react';

const CheckIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.725 8.486 12.089 23.122 5.436 16.47'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon11);
export { Memo as CheckIcon11 };
