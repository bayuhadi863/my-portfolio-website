'use client';

import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Container from './container';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header>
      <Container className='flex justify-between items-center py-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavigationMenuItem key={i}>
                <Link
                  href={link.href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === link.href || pathname.startsWith(`${link.href}/`)}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex'>
          <Button
            variant='ghost'
            size='icon'
            className='flex dark:hidden'
            onClick={() => setTheme('dark')}
          >
            <Moon className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='hidden dark:flex'
            onClick={() => setTheme('light')}
          >
            <Sun className='h-4 w-4' />
          </Button>
          <Sheet>
            <SheetTrigger
              asChild
              className='flex md:hidden'
            >
              <Button
                variant='ghost'
                size='icon'
              >
                <Menu className='h-4 w-4' />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col mt-4'>
                {links.map((link, i) => (
                  <SheetClose
                    asChild
                    key={i}
                  >
                    <Button
                      asChild
                      variant='ghost'
                      className='justify-start'
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </Button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Header;
