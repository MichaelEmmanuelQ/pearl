import { memo, SVGProps } from 'react';

const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.422 51.436H9.527c-1.22 0-2.388-.365-3.25-1.013-.863-.65-1.347-1.529-1.347-2.447V35.868c0-.917.484-1.797 1.347-2.446.862-.648 2.03-1.013 3.25-1.013h6.895m16.09-3.46v-6.918c0-1.376-.727-2.696-2.02-3.67-1.294-.973-3.047-1.52-4.876-1.52L16.422 32.41v19.027h25.926c1.109.01 2.185-.283 3.03-.823.844-.54 1.401-1.293 1.567-2.118l3.172-15.567a2.64 2.64 0 0 0-.13-1.484 3.325 3.325 0 0 0-.946-1.305 4.737 4.737 0 0 0-1.586-.886 5.916 5.916 0 0 0-1.935-.303H32.511Z'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ThumbsUpIcon);
export { Memo as ThumbsUpIcon };
