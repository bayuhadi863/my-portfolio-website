import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-6'>
      <p className='text-2xl font-medium'>404 | This page could not found.</p>
      <Button
        asChild
        variant='link'
        className='text-muted-foreground'
      >
        <Link href='/'>Return Home</Link>
      </Button>
    </div>
  );
}
