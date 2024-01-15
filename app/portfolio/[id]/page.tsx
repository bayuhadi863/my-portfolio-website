'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolios } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound, CalendarDays } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactPlayer from 'react-player/youtube';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { id: string } }) => {
  const idNumber = parseInt(params.id, 10);
  const portfolio = portfolios.find((portfolio) => portfolio.id === idNumber);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <div className='bg-muted dark:bg-background py-8 shadow-inner border-y-2'>
        <Container>
          <h3 className='scroll-m-20 text-2xl text-muted-foreground font-medium tracking-tight mb-2'>Portfolio</h3>
          <h3 className='scroll-m-20 text-3xl font-semibold tracking-tight'>{portfolio?.title}</h3>
        </Container>
      </div>
      <Container className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-8'>
        <div className='lg:col-span-2'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Application Displays</h3>
          <div className='mt-4'>
            <ScrollArea className='w-full h-[40rem] border rounded-lg'>
              <div className='p-4 flex flex-col items-center gap-4'>
                {portfolio
                  ? portfolio.images.map((image, i) => (
                      <div key={i}>
                        <p className='text-xs text-muted-foreground mb-2'>{image}</p>
                        <Image
                          src={image}
                          alt='image'
                          height={1000}
                          width={700}
                          className='rounded-md object-cover border mb-4'
                        />
                      </div>
                    ))
                  : 'Portfolio not available'}
              </div>
            </ScrollArea>
          </div>
          {portfolio?.videoDemoLink ? (
            <>
              <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4'>Application Demo Video</h3>
              <div className='aspect-video mt-4 rounded-lg overflow-hidden border'>
                <ReactPlayer
                  url={portfolio.videoDemoLink}
                  width='100%'
                  height='100%'
                  controls={true}
                  playing={false}
                  previewTabIndex={1}
                />
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex gap-2 items-center '>
                <UserRound className='text-primary h-4 w-4' /> <p className='text-sm font-medium text-muted-foreground leading-4'>{portfolio?.member}</p>
              </div>
              <div className='flex gap-2 items-center mt-4'>
                <CalendarDays className='text-primary h-4 w-4' /> <p className='text-sm font-medium text-muted-foreground leading-none'>{portfolio?.time}</p>
              </div>
              <p className='text-sm text-muted-foreground leading-6 [&:not(:first-child)]:mt-4 mb-6'>{portfolio?.description}</p>
              <CardTitle>Technologies</CardTitle>
              <div className='mt-4 flex gap-1 flex-wrap'>
                {portfolio?.tech.map((item, i) => (
                  <Badge
                    key={i}
                    variant='secondary'
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className='w-full'
              >
                <a
                  href={portfolio?.githubLink}
                  target='_blank'
                >
                  Source Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Page;
