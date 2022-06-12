import { memo, SVGProps } from 'react';

const FacebookSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M38.257 3.488H7.156A4.241 4.241 0 0 0 2.915 7.73v31.102a4.241 4.241 0 0 0 4.24 4.241h12.128V29.615h-5.567V23.28h5.567v-4.828c0-5.49 3.269-8.524 8.276-8.524 2.398 0 4.906.427 4.906.427v5.39h-2.763c-2.723 0-3.572 1.69-3.572 3.422v4.113h6.078l-.972 6.335H26.13v13.457h12.127a4.241 4.241 0 0 0 4.242-4.24V7.728a4.241 4.241 0 0 0-4.242-4.24Z'
      fill='#fff'
    />
  </svg>
);

const Memo = memo(FacebookSquareIcon);
export { Memo as FacebookSquareIcon };
