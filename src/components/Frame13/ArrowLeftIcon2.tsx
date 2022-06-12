import { memo, SVGProps } from 'react';

const ArrowLeftIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.239 16.256H7.61M16.925 25.57l-9.314-9.314 9.314-9.314'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowLeftIcon2);
export { Memo as ArrowLeftIcon2 };
