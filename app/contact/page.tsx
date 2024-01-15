import React from 'react';
import Heading from '@/components/heading';
import Container from '@/components/container';
import { FiMapPin, FiSmartphone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { SiWhatsapp, SiTelegram, SiInstagram } from "react-icons/si";

const contacts = [
  {
    title: 'Address',
    description: 'Mojorejo RT 2/RW 5, Ngerong, Gempol, Pasuruan. 67155',
    icon: <FiMapPin className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Phone',
    description: '+62-882-1883-2453',
    icon: <FiSmartphone className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Email',
    description: 'bayuhadi863@gmail.com',
    icon: <MdOutlineEmail className='h-10 w-10 text-primary' />,
  },
  {
    title: 'WhatsApp',
    description: '+62-882-1883-2453',
    icon: <SiWhatsapp className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Telegram',
    description: '+62-896-0141-5100',
    icon: <SiTelegram className='h-10 w-10 text-primary' />,
  },
  {
    title: 'Instagram',
    description: '@bayuhadileksana',
    icon: <SiInstagram className='h-10 w-10 text-primary' />,
  },
];

const Page = () => {
  return (
    <>
      <Heading>Contact</Heading>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8'>
        {contacts.map((contact, i) => (
          <div
            key={i}
            className='flex flex-col items-center text-center rounded-lg p-10 border'
          >
            <div>{contact.icon}</div>
            <div className='text-lg font-semibold mt-4 mb-2'>{contact.title}</div>
            <div className='text-muted-foreground'>{contact.description}</div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Page;
