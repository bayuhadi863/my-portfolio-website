import React from 'react';
import Container from './container';
import Link from 'next/link';
import { Button } from './ui/button';
import { sosmedLinks } from '@/lib/data';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className='bg-muted dark:bg-background border-t-2 shadow-inner'>
      <Container className='flex flex-col lg:flex-row justify-between items-center py-4'>
        <div className='flex flex-wrap justify-center'>
          {sosmedLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant='link'
              className='text-muted-foreground'
            >
              <a
                href={link.href}
                target='_blank'
              >
                {link.name}
              </a>
            </Button>
          ))}
        </div>
        <p className='text-sm text-muted-foreground text-center'>&copy; {thisYear} All Rights Reserved. Bayu Hadi Leksana</p>
      </Container>
    </footer>
  );
};

export default Footer;
