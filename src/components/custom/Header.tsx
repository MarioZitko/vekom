'use client';

import * as React from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { HeaderProps } from './types';
import { DarkModeToggle } from './DarkModeToggle';

export function Header({ products }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-secondary text-secondary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <Link href="/" className="text-primary hover:text-secondary-foreground transition">
              VEKOM
              <p className="text-sm text-muted-foreground hover:text-secondary-foreground">
                Proizvodnja građevinskih elemenata
              </p>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-primary')}>
                    Početna
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary">Proizvodi</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/o-nama" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-primary')}>
                    O nama
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/kontakt" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-primary')}>
                    Kako do nas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Information (Visible on Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+3850915687329" className="text-sm hover:text-primary">
                +385 (0) 91 5687 329
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@vekom-elementi.hr" className="text-sm hover:text-primary">
                info@vekom-elementi.hr
              </a>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary text-secondary-foreground py-4 px-6 border-t border-border">
          <nav className="flex flex-col gap-4 text-center">
            <Link href="/" className="text-primary hover:text-primary-foreground">
              Početna
            </Link>
            <Link href="/o-nama" className="text-primary hover:text-primary-foreground">
              O nama
            </Link>
            <Link href="/proizvodi" className="text-primary hover:text-primary-foreground">
              Proizvodi
            </Link>
            <Link href="/kontakt" className="text-primary hover:text-primary-foreground">
              Kako do nas
            </Link>
          </nav>

          {/* Centered Dark Mode Toggle */}
          <div className="flex justify-center mt-4">
            <DarkModeToggle />
          </div>

          {/* Contact Information for Mobile */}
          <div className="mt-4 space-y-2 text-center">
            <p className="text-sm flex justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+3850915687329" className="hover:text-primary">
                +385 (0) 91 5687 329
              </a>
            </p>
            <p className="text-sm flex justify-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@vekom-elementi.hr" className="hover:text-primary">
                info@vekom-elementi.hr
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

// List item component
const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
