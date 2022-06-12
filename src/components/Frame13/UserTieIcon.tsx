import { memo, SVGProps } from 'react';

const UserTieIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 55 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)'>
      <path
        d='M27.627 27.993c7.533 0 13.638-6.105 13.638-13.638C41.265 6.822 35.16.717 27.627.717c-7.533 0-13.639 6.105-13.639 13.638 0 7.533 6.106 13.638 13.639 13.638Zm10.207 3.474L32.74 51.86l-3.41-14.49 3.41-5.967H22.512l3.41 5.966-3.41 14.49-5.093-20.393c-7.597.363-13.66 6.575-13.66 14.257v4.432a5.116 5.116 0 0 0 5.115 5.114H46.38a5.116 5.116 0 0 0 5.114-5.114v-4.432c0-7.682-6.062-13.894-13.66-14.256Z'
        fill='#000'
      />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.35 .717)' d='M0 0h54.553v54.553H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UserTieIcon);
export { Memo as UserTieIcon };
