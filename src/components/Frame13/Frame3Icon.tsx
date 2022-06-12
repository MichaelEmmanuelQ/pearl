import { memo, SVGProps } from 'react';

const Frame3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.245 10.922h23.95M15.88 1.608l9.315 9.314-9.314 9.314'
      stroke='#fff'
      strokeWidth={1.331}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Frame3Icon);
export { Memo as Frame3Icon };
