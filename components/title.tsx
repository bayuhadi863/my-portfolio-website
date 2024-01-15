import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight border-b-2 border-primary'>{children}</h3>
    </div>
  );
};

export default Title;
