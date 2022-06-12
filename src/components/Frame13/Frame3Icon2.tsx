import { memo, SVGProps } from 'react';

const Frame3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 27 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.52 10.261h23.95M16.156.947l9.314 9.314-9.314 9.314'
      stroke='#fff'
      strokeWidth={1.331}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Frame3Icon2);
export { Memo as Frame3Icon2 };
