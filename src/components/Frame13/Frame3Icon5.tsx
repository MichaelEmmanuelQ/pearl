import { memo, SVGProps } from 'react';

const Frame3Icon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M.95 10.025H24.9M15.586.71l9.314 9.315-9.314 9.314'
      stroke='#000'
      strokeWidth={1.331}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Frame3Icon5);
export { Memo as Frame3Icon5 };
