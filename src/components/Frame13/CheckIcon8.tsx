import { memo, SVGProps } from 'react';

const CheckIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.244 6.226 9.267 17.203l-4.99-4.99'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon8);
export { Memo as CheckIcon8 };
