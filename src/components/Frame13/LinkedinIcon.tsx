import { memo, SVGProps } from 'react';

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 47 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M40.474 3.488H6.536c-1.555 0-2.819 1.281-2.819 2.854v33.876c0 1.573 1.264 2.854 2.819 2.854h33.938c1.555 0 2.827-1.28 2.827-2.854V6.342c0-1.573-1.272-2.854-2.827-2.854ZM15.68 37.418H9.814V18.526h5.876v18.89h-.01Zm-2.934-21.471a3.403 3.403 0 0 1-3.401-3.402 3.403 3.403 0 0 1 3.401-3.402 3.409 3.409 0 0 1 3.402 3.402 3.397 3.397 0 0 1-3.402 3.402Zm24.926 21.47h-5.867v-9.189c0-2.191-.044-5.01-3.048-5.01-3.057 0-3.526 2.386-3.526 4.851v9.348h-5.867v-18.89h5.629v2.58h.08c.786-1.485 2.703-3.049 5.557-3.049 5.938 0 7.042 3.915 7.042 9.004v10.355Z'
      fill='#fff'
    />
  </svg>
);

const Memo = memo(LinkedinIcon);
export { Memo as LinkedinIcon };
