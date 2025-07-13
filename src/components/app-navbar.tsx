'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationGroup,
  NavigationMenuSeparator,
} from "@/components/ui/navigation-menu"
import { useTheme } from "next-themes"

import {  SidebarTrigger } from "@/components/ui/sidebar";
import { CoffeeIcon, GithubIcon, MoonIcon, SunIcon, User2Icon } from "lucide-react";


const AppHeader = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const iconColor = theme === "dark" ? "white" : "black";
  const ThemeIcon = theme === "dark" ? SunIcon : MoonIcon;

  return (
      <NavigationMenu >
        <NavigationMenuList>
          <NavigationGroup>
            <NavigationMenuItem>
                <SidebarTrigger />
            </NavigationMenuItem>
          </NavigationGroup>
          <NavigationGroup>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <ThemeIcon fill="white" color={iconColor} onClick={toggleTheme}/>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <User2Icon  fill="white" color={iconColor} />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuSeparator />
            <NavigationMenuItem>
              <NavigationMenuLink target="_blank" href="https://github.com/ra101/flow">
                <GithubIcon fill="#888" color={iconColor} />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink target="_blank" href="https://coff.ee/ra101">
                <CoffeeIcon fill="#c70" color={iconColor} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationGroup>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default AppHeader;