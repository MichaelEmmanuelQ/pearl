import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M46.15 48.711v-4.546a9.092 9.092 0 0 0-9.092-9.092H18.873a9.092 9.092 0 0 0-9.092 9.092v4.546M27.965 25.981a9.092 9.092 0 1 0 0-18.184 9.092 9.092 0 1 0 0 18.184Z'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UserIcon);
export { Memo as UserIcon };
