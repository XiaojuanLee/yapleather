import * as React from "react"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { navlinks } from "@/utils/links";

export default function Menu() {
    return(
        <NavigationMenu >
            <NavigationMenuList >
                <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#067627] hover:text-black text-white text-sm font-medium leading-none" >
                    Home
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#067627] text-white">Leather Classes</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                    {navlinks.map((navlinks) => (
                        <ListItem
                        key={navlinks.label}
                        title={navlinks.label}
                        href={navlinks.href}
                        >
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-[#067627] hover:text-black text-white text-sm font-medium leading-none">
                    Contact Us
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"