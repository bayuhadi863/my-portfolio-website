import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <Container className='flex flex-col-reverse lg:flex-row justify-center items-center gap-10 py-12'>
      <div className='lg:max-w-lg'>
        <h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl'>{`Hi, I'm Bayu Hadi Leksana!`}</h1>
        <h3 className='scroll-m-20 text-2xl font-medium tracking-tight mt-4'>Fullstack Web Developer</h3>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-4'>
          I am a passionate and skilled full-stack web developer with experience in a variety of projects. I have a strong understanding of both front-end and back-end technologies. I can create your dream website, and you can also hire me
          to work together.
        </p>
        <Button asChild>
          <a
            href='https://drive.google.com/drive/folders/1iBAZt46TKaC0s-I6Xxkg6VvJtk2Kue77'
            target='_blank'
          >
            Download CV
          </a>
        </Button>
      </div>
      <div className='px-10'>
        <div className='rounded-full ring-[18px] ring-background dark:ring-muted shadow-[0_0_40px_0_rgba(0,0,0,0.3)]'>
          <Image
            src='/hero-image-hd.png'
            alt='image'
            width={380}
            height={380}
            className='rounded-full shadow-inner'
          />
        </div>
      </div>
    </Container>
  );
};

export default Page;
