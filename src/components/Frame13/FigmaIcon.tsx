import { memo, SVGProps } from 'react';

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 292 291' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M145.868 145.261c0-20.056 16.259-36.314 36.315-36.314 20.056 0 36.315 16.258 36.315 36.314 0 20.057-16.259 36.315-36.315 36.315-20.056 0-36.315-16.258-36.315-36.315Z'
      fill='#1ABCFE'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M73.239 217.891c0-20.056 16.258-36.315 36.314-36.315h36.315v36.315c0 20.056-16.258 36.315-36.315 36.315-20.056 0-36.314-16.259-36.314-36.315Z'
      fill='#0ACF83'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M145.868 36.317v72.63h36.315c20.056 0 36.315-16.259 36.315-36.315 0-20.056-16.259-36.315-36.315-36.315h-36.315Z'
      fill='#FF7262'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M73.239 72.632c0 20.056 16.258 36.315 36.314 36.315h36.315v-72.63h-36.315c-20.056 0-36.314 16.259-36.314 36.315Z'
      fill='#F24E1E'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M73.239 145.261c0 20.057 16.258 36.315 36.314 36.315h36.315v-72.629h-36.315c-20.056 0-36.314 16.258-36.314 36.314Z'
      fill='#A259FF'
    />
  </svg>
);

const Memo = memo(FigmaIcon);
export { Memo as FigmaIcon };
