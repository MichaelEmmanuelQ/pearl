import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={36.59} cy={36.59} r={36.59} fill='#fff' />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
