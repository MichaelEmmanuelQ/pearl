import { memo, SVGProps } from 'react';

const Frame3Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M.906 10.033h23.95M15.542.72l9.314 9.313-9.314 9.314'
      stroke='#fff'
      strokeWidth={1.331}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Frame3Icon3);
export { Memo as Frame3Icon3 };
