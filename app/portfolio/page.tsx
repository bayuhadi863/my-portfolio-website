'use client';

import React from 'react';
import Heading from '@/components/heading';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { portfolios } from '@/lib/data';
import { Card, CardTitle, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

const Page = () => {
  return (
    <>
      <Heading>Portfolio</Heading>
      <Container className='py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {portfolios.map((portfolio, i) => (
            <Card
              key={i}
              className='overflow-hidden'
            >
              <div className='border relative'>
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={portfolio.img}
                    alt='image'
                    // placeholder='blur'
                    fill
                    className='object-cover'
                  />
                </AspectRatio>
                <div className='absolute p-4 bg-foreground/75 dark:bg-background/75 inset-0 opacity-0 hover:opacity-100 transition-all duration-300 hidden lg:flex flex-col gap-4 justify-center items-center'>
                  <p className='text-lg text-background dark:text-foreground font-semibold'>{portfolio.title}</p>
                  <div className='flex gap-2'>
                    <Button asChild>
                      <Link href={`/portfolio/${portfolio.id}`}>Detail</Link>
                    </Button>
                    <Button
                      asChild
                      variant='outline'
                    >
                      <a
                        href={portfolio.githubLink}
                        target='_blank'
                      >
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className='block lg:hidden'>
                <CardHeader>
                  <h4 className='text-lg font-medium'>{portfolio.title}</h4>
                </CardHeader>
                <CardFooter>
                  <div className='flex gap-2'>
                    <Button asChild>
                      <Link href={`/portfolio/${portfolio.id}`}>Detail</Link>
                    </Button>
                    <Button
                      asChild
                      variant='secondary'
                    >
                      <a
                        href={portfolio.githubLink}
                        target='_blank'
                      >
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Page;
