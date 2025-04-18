import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './navigation-menu';
import { navigation_items } from '@/shared/utils/main-navigation-items';
import Link from 'next/link';
import { Separator } from './separator';
import { ButtonLogout } from './button-logout.';
import { UserProfile } from './user-profile';

export function HeaderMobile() {
  return (
    <header className='flex justify-between items-center lg:hidden h-[70px] bg-slate-50'>
      <div className='w-fit h-full flex items-center rounded-sm text-slate-800 font-bold text-xl uppercase px-4'>
        Arkenstone
      </div>

      <Sheet>
        <SheetTrigger className='m-4'>
          <Menu className='size-6 text-slate-800' />
        </SheetTrigger>
        <SheetContent>
          <div className='w-full flex flex-col gap-8'>
            <div className='w-fit h-full flex items-center rounded-sm text-slate-800 font-bold text-xl uppercase p-4'>
              Arkenstone
            </div>
            <NavigationMenu className='max-w-full mt-[80px] flex justify-end items-end'>
              <NavigationMenuList className='text-right flex-col gap-2 text-slate-800 uppercase font-semibold items-end'>
                {navigation_items.map((menu) => (
                  <NavigationMenuItem
                    key={menu.label}
                    className='w-full border-r-4 border-input py-4 pr-4 mr-4'
                  >
                    <Link href={menu.href} legacyBehavior passHref>
                      <NavigationMenuLink>{menu.label}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Separator />

            <div className='flex gap-4 justify-between items-center px-6'>
              <UserProfile />
              <Separator orientation='vertical' className='h-full' />
              <ButtonLogout>Sair</ButtonLogout>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
