import { navigation_items } from '@/shared/utils/main-navigation-items';
import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Separator } from './separator';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

export function Header() {
  return (
    <header className='hidden lg:flex items-center h-[70px] bg-slate-50'>
      <div className='w-fit h-full rounded-sm text-slate-800 font-bold text-2xl uppercase p-4 pr-8'>
        Arkenstone
      </div>
      <Separator orientation='vertical' className='m-0' />
      <NavigationMenu className='ml-6 h-full'>
        <NavigationMenuList className='h-[70px] gap-10 text-slate-800 uppercase font-semibold'>
          {navigation_items.map((menu) => (
            <NavigationMenuItem
              key={menu.label}
              className='px-3 hover:text-slate-500 border-b-4 border-transparent hover:border-slate-500 transition-all duration-300'
            >
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink className='flex justify-center'>
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex gap-4 items-center ml-auto'>
        <div className='flex gap-2 items-center'>
          <User className='size-8 text-slate-500' />
          <div className='grid gap-1'>
            <span className='text-sm font-bold'>Rafael N.</span>
            <span className='text-xs text-gray-500'>rafael@arkenstone.com</span>
          </div>
        </div>
        <button className='text-sm text-slate-500 font-semibold uppercase border-l border-input h-[70px] px-10 rounded-sm cursor-pointer'>
          Sair
        </button>
      </div>
    </header>
  );
}
