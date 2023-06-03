import React, { ReactNode } from 'react';
import classes from './MyButton.module.css';

interface IMyButton {
  children: ReactNode;
  cb: () => void;
}

export default function MyButton({ children, ...props }: IMyButton) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}
