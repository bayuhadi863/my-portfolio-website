import React from 'react';
import clsx from 'clsx';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx('px-6 md:px-10 lg:px-14', className)}>{children}</div>;
};

export default Container;
