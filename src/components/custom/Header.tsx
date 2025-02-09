'use client';

import * as React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react'; // Icons for phone and mail

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

// Product categories
const products = [
  {
    title: 'Betonske ploče',
    href: '/proizvodi/betonske-ploce',
    description: 'Izdržljive betonske ploče za različite primjene.',
  },
  {
    title: 'Ogradni elementi',
    href: '/proizvodi/ogradni-elementi',
    description: 'Modularni betonski elementi za ograde.',
  },
  {
    title: 'Popločavanje',
    href: '/proizvodi/poplocavanje',
    description: 'Različiti oblici i boje betonskih ploča za popločavanje.',
  },
  {
    title: 'Specijalni betonski proizvodi',
    href: '/proizvodi/specijalni',
    description: 'Proizvodi prilagođeni specifičnim potrebama.',
  },
];

export function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Left Section: Vekom Logo + Contact Information */}
        <div className="flex items-center gap-6">
          {/* Vekom (acts as a Home button) */}
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition">
            VEKOM
          </Link>

          {/* Contact Information */}
          <div className="hidden md:flex items-center gap-4 text-gray-700">
            {/* Phone 1 */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+385016289196" className="text-sm hover:underline">
                +385 (0) 1 6289 196
              </a>
            </div>

            {/* Phone 2 */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+3850915687329" className="text-sm hover:underline">
                +385 (0) 91 5687 329
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:info@vekom-elementi.hr" className="text-sm hover:underline">
                info@vekom-elementi.hr
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {/* Home */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Početna
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Products Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Proizvodi</NavigationMenuTrigger>
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

            {/* About Us */}
            <NavigationMenuItem>
              <Link href="/o-nama" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  O nama
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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
