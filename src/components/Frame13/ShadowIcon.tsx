import { memo, SVGProps } from 'react';

const ShadowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 616 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M307.795 36.683c169.835 0 307.514-8.038 307.514-17.954C615.309 8.814 477.63.776 307.795.776 137.959.776.281 8.814.281 18.729c0 9.916 137.678 17.954 307.514 17.954Z'
      fill='#F5F5F5'
    />
  </svg>
);

const Memo = memo(ShadowIcon);
export { Memo as ShadowIcon };
