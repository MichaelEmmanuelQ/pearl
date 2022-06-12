import { memo, SVGProps } from 'react';

const Frame3Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 27 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.453 10.025h23.95M16.089.71l9.314 9.315-9.314 9.314'
      stroke='#000'
      strokeWidth={1.331}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Frame3Icon4);
export { Memo as Frame3Icon4 };
