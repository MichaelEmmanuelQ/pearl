import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 882 875' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse
      cx={441.025}
      cy={437.442}
      rx={393.844}
      ry={390.374}
      stroke='#F1AD00'
      strokeOpacity={0.21}
      strokeWidth={92.498}
    />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
