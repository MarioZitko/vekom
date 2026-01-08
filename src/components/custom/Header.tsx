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

export function Header({ categories }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-secondary text-secondary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Left Section: Vekom Logo + Contact Information */}
        <div className="flex items-center gap-6">
          {/* Vekom (acts as a Home button) */}
          <div className="flex flex-col">
            <Link href="/" className="text-primary hover:text-secondary-foreground transition">
              VEKOM
              <p className="text-sm text-muted-foreground hover:text-secondary-foreground">
                Proizvodnja građevinskih elemenata
              </p>
            </Link>
          </div>

          {/* Contact Information (Next to Logo) */}
          <div className="hidden md:flex items-center ml-6 gap-4 text-muted-foreground">
            {/* Phone 1 */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+3850915687329" className="text-sm hover:text-primary whitespace-nowrap">
                +385 (0) 91 5687 329
              </a>
            </div>

            {/* Phone 2 */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+385016289196" className="text-sm hover:text-primary whitespace-nowrap">
                +385 (0) 1 6289 196
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 pr-4">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:info@vekom-elementi.hr"
                className="text-sm hover:text-primary whitespace-nowrap"
              >
                info@vekom-elementi.hr
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), 'text-primary')}>
                    Početna
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Proizvodi opens /proizvodi & has dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary">Proizvodi</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 rounded-md">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <ListItem
                        key={category.name}
                        title={category.name}
                        href={category.url}
                        className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 transition"
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/o-nama" className={cn(navigationMenuTriggerStyle(), 'text-primary')}>
                    O nama
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/kontakt"
                    className={cn(navigationMenuTriggerStyle(), 'text-primary')}
                  >
                    Kontakt | Kako do nas
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Dark Mode Toggle (Only on Desktop) */}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-secondary text-secondary-foreground py-4 px-6 border-t border-border">
          <nav className="flex flex-col gap-4 text-center">
            <Link href="/" className="text-primary hover:text-primary-foreground">
              Početna
            </Link>
            <Link href="/proizvodi" className="text-primary hover:text-primary-foreground">
              Proizvodi
            </Link>
            <Link href="/o-nama" className="text-primary hover:text-primary-foreground">
              O nama
            </Link>
            <Link href="/kontakt" className="text-primary hover:text-primary-foreground">
              Kontakt | Kako do nas
            </Link>
          </nav>

          {/* Dark Mode Toggle (Centered for Mobile) */}
          <div className="flex justify-center mt-4">
            <DarkModeToggle />
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-4 space-y-2 text-center">
            <p className="text-sm flex justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+3850915687329" className="hover:text-primary">
                +385 (0) 91 5687 329
              </a>
            </p>
            <p className="text-sm flex justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+385016289196" className="hover:text-primary">
                +385 (0) 1 6289 196
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
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
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
