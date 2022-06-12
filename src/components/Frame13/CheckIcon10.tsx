import { memo, SVGProps } from 'react';

const CheckIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.734 6.096 9.757 17.073l-4.99-4.99'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon10);
export { Memo as CheckIcon10 };
