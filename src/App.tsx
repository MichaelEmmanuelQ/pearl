import { FC, memo } from 'react';

import classes from './App.module.css';
import { Frame13 } from './components/Frame13/Frame13';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Frame13 />
    </div>
  );
});
