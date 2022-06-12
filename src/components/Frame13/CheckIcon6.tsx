import { memo, SVGProps } from 'react';

const CheckIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.21 6.493 9.235 17.47l-4.99-4.99'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon6);
export { Memo as CheckIcon6 };
