'use client';

import React from 'react';
import Heading from '@/components/heading';
import Container from '@/components/container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Title from '@/components/title';
import { Laptop2, ServerCog } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const whatIDos = [
  {
    title: 'Website Development',
    description:
      'I can build your dream static website with responsive design. Static websites are websites that do not use real-time data from a database. Examples of static websites that I can build include portfolio websites, landing pages, and more.',
    icon: <Laptop2 className='h-12 w-12 text-primary' />,
  },
  {
    title: 'Web Application Development',
    description:
      'I can build your dream web app with responsive design and complete functionality. Web apps are web applications that have more complex functionality and allow deeper user interaction with the use of a database. I can build web apps like e-commerce, e-learning, and more.',
    icon: <ServerCog className='h-12 w-12 text-primary' />,
  },
];

const educations = [
  {
    time: '2022 - Now',
    name: 'Politeknik Elektronika Negeri Surabaya',
    major: 'Informatic Engineering',
    description: 'I have an IPK of 3.83. I am able to complete all assignments and projects, including website development projects, to a very high standard.',
  },
  {
    time: '2019 - 2022',
    name: 'SMA Negeri 1 Pandaan',
    major: 'Science',
    description: 'I graduated with a GPA of 85. I was able to complete all of my school assignments well and was active in several organizations, eventually becoming the president of one of them.',
  },
];

const certifications = [
  {
    time: 'July 2023',
    name: 'Laravel Web Development - Sanbercode',
    credentialId: 'Credential ID 39031/466/SNBR/BOOTCAMP/VIII/2023',
    link: 'https://sanbercode.com/sertifikat/generate/946d266a-f34e-4da9-bcb3-1b6c07440d9d',
    logo: '/sanbercode_logo.jpeg',
  },
  {
    time: 'June 2023',
    name: 'Belajar Membuat Aplikasi Web dengan React - Dicoding',
    credentialId: 'Credential ID JLX1D98JJZ72',
    link: 'https://www.dicoding.com/certificates/JLX1D98JJZ72',
    logo: '/dicoding_logo.jpeg',
  },
  {
    time: 'July 2023',
    name: 'Fundamental Front-End Web Dev II - Coding Studio',
    credentialId: 'Credential ID 77DF6D1151-77F18B2050-75BB1E64F4',
    link: 'https://codingstudio.id/certificate/77DF6D1151-77F18B2050-75BB1E64F4/',
    logo: '/coding_studio_logo.jpeg',
  },
  {
    time: 'June 2023',
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula - Dicoding',
    credentialId: 'Credential ID JMZV9V0ONPN9',
    link: 'https://www.dicoding.com/certificates/JMZV9V0ONPN9',
    logo: '/dicoding_logo.jpeg',
  },
];

const Page = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      <Heading>About Me</Heading>
      <section>
        <Container className='flex flex-col lg:flex-row py-10 gap-10 items-center'>
          <div className='bg-muted rounded-md min-w-80'>
            <Image
              src='/about-image.png'
              alt='image'
              width={360}
              height={450}
              className='shadow-md rounded-md dark:brightness-90'
            />
          </div>
          <div>
            <h4 className='scroll-m-20 text-xl font-medium text-muted-foreground tracking-tight mb-4'>Fullstack Web Developer</h4>
            <h2 className='scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0 mb-4'>Bayu Hadi Leksana</h2>
            <p className='leading-7 [&:not(:first-child)]:mt-4 mb-4'>
              I am an undergraduate student of Informatic Technology at the Electronic Engineering Polytechnic Institute of Surabaya. I am a Fullstack Web Developer with expertise in React Js, Next Js, Laravel, Supabase, SQL Database, and
              other. I have experience working on a variety of web development projects. I am currently ready to build your dream website. I am also available for hire.
            </p>
            <div className='flex gap-2'>
              <Button asChild>
                <a
                  href='https://drive.google.com/drive/folders/1iBAZt46TKaC0s-I6Xxkg6VvJtk2Kue77'
                  target='_blank'
                >
                  Download CV
                </a>
              </Button>
              <Button variant='secondary'>
                <Link href='/contact'>Contact</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className='pt-4 pb-10'>
        <Container>
          <Title>What I Do</Title>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6'>
            {whatIDos.map((item, i) => (
              <div
                key={i}
                className='flex gap-4'
              >
                <div>{item.icon}</div>
                <div>
                  <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>{item.title}</h4>
                  <p className='leading-7 [&:not(:first-child)]:mt-2'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='pt-4 pb-10'>
        <Container>
          <Title>Education</Title>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6'>
            {educations.map((education, i) => (
              <div key={i}>
                <div className='flex gap-3'>
                  <div>
                    <Badge className='text-nowrap'>{education.time}</Badge>
                  </div>
                  <p className='text-muted-foreground'>{education.name}</p>
                </div>
                <div className='mt-2 ps-10'>
                  <p className='text-lg font-semibold'>{education.major}</p>
                  <p className='leading-7 [&:not(:first-child)]:mt-1'>{education.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='pt-4 pb-10'>
        <Container>
          <Title>Certifications</Title>
          <Container className='flex justify-center mt-6'>
            <Carousel
              opts={{
                align: 'start',
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className='w-full'
            >
              <CarouselContent>
                {certifications.map((certification, index) => (
                  <CarouselItem
                    key={index}
                    className='lg:basis-1/2 py-2'
                  >
                    <a
                      href={certification.link}
                      target='_blank'
                    >
                      <div className='grid grid-cols-4 rounded-md border hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden'>
                        <div className='col-span-1 flex items-center'>
                          <Image
                            src={certification.logo}
                            alt='image'
                            width={120}
                            height={120}
                          />
                        </div>
                        <div className='flex flex-col justify-center px-2 py-2 col-span-3'>
                          <p className='text-sm md:text-base font-semibold'>{certification.name}</p>
                          <p className='text-xs md:text-sm text-muted-foreground'>{certification.credentialId}</p>
                          <p className='text-xs text-muted-foreground'>{certification.time}</p>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Container>
        </Container>
      </section>

      <section className='pt-4 pb-10'>
        <Container>
          <Title>Skills</Title>
          <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 gap-10'>
            <div>
              <p className='text-lg font-semibold'>Front-End</p>
              <ul className='my-2 ml-6 list-disc [&>li]:mt-1'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>Next Js</li>
              </ul>
            </div>
            <div>
              <p className='text-lg font-semibold'>Back-End</p>
              <ul className='my-2 ml-6 list-disc [&>li]:mt-1'>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Node Js</li>
                <li>MySQL</li>
                <li>PostgreSql</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
