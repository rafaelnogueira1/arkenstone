import { navigation_items } from '@/shared/utils/main-navigation-items';
import Link from 'next/link';
import React from 'react';
import { Separator } from './separator';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './navigation-menu';
import { ButtonLogout } from './button-logout.';
import { UserProfile } from './user-profile';

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
      <div className='flex gap-6 items-center ml-auto pr-6 h-[70px]'>
        <UserProfile />
        <Separator orientation='vertical' className='h-full' />
        <ButtonLogout>Sair</ButtonLogout>
      </div>
    </header>
  );
}
