import { memo, SVGProps } from 'react';

const FloorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 721 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M720.882 1.217c0 .226-161.373.419-360.398.419C161.46 1.636.055 1.443.055 1.217c0-.225 161.34-.419 360.429-.419 199.09 0 360.398.177 360.398.42Z'
      fill='#263238'
    />
  </svg>
);

const Memo = memo(FloorIcon);
export { Memo as FloorIcon };
