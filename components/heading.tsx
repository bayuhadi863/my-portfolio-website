import React from 'react';
import Container from './container';

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-muted dark:bg-background py-12 shadow-inner border-y-2'>
      <Container>
        <h2 className='scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0'>{children}</h2>
      </Container>
    </div>
  );
};

export default Heading;
