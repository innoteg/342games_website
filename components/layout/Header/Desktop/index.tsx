import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { IMAGE_URLS } from '@/lib/constants/urls'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import React from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
const commonItemClassName = 'bg-transparent text-white focus:!bg-transparent hover:!bg-transparent focs:!bg-transparent hover:!text-white hover:!opacity-50'
const listRender = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/aboutUs',
  },
  {
    title: 'Games',
    href: '/games',
    children: [
      {
        title: '342 Games1',
        href: '/games/342Games',
      },
      {
        title: '342 Games2',
        href: '/games/342Games',
      },
      {
        title: '342 Games2',
        href: '/games/342Games',
      },
      {
        title: '342 Games3',
        href: '/games/342Games',
      },
    ]
  },
  {
    title: 'My Rune Collection',
    href: '/myRuneCollection',
  },
  // {
  //   title: 'Trading Market',
  //   href: '/tradingMarket',
  // },
  // {
  //   title: 'Web3 Features',
  //   href: '/web3Features',
  // },
  // {
  //   title: 'Tokenomics',
  //   href: '/tokenomics',
  // },
  // {
  //   title: 'Meme Coin',
  //   href: '/memeCoin',
  // },
  // {
  //   title: 'Partners',
  //   href: '/partners',
  // },
  // {
  //   title: 'Community',
  //   href: '/community',
  // },
  // {
  //   title: 'Contact Us',
  //   href: '/contactUs',
  // },
]
import PlayNowDialog from './PlayNowDialog'
export default function DesktopHeader() {
  const router = useRouter();

  const handleLoginClick = () => {
    if (router) {
      router.push('/login');
    } else {
      console.error("Router is not available");
    }
  };

  return (
    <>
      {/* 占位div，防止内容被fixed header遮挡 */}
      {/* <div className="hidden md:block h-[90px]" /> */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex h-[90px] items-center justify-between px-10 bg-[#110f23]">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-white">
            <Link href="/">
              <Image 
                width={128} 
                height={27} 
                src={IMAGE_URLS.HeadIcon} 
                alt='headerIcon'
                loading='lazy'
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {listRender.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.children ? (
                      // 有子菜单的情况
                      <>
                        <NavigationMenuTrigger className={commonItemClassName}>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.href}
                                href={child.href}
                                title={child.title}
                              >
                                {child.title}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      // 没有子菜单的情况
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${commonItemClassName}`}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button onClick={handleLoginClick} variant="common2">Login</Button>
          <PlayNowDialog></PlayNowDialog>
        </div>
      </header>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem" 