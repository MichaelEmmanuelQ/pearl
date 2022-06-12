import { memo, SVGProps } from 'react';

const CheckIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.541 6.09 9.564 17.067l-4.99-4.989'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon2);
export { Memo as CheckIcon2 };
