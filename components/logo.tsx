import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex justify-center items-center h-10 w-10 bg-primary rounded-full'>
        <p className='text-2xl font-bold text-white'>B</p>
      </div>
      <div>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight '>Bayu Hadi</h3>
      </div>
    </div>
  );
};

export default Logo;
