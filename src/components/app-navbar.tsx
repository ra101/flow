'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useTheme } from "next-themes"

import {  SidebarTrigger } from "@/components/ui/sidebar";
import { GithubIcon, MoonIcon, SunIcon, User2Icon } from "lucide-react";
import Link from "next/link";


const NavigationGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {children}
    </div>
  );
}

const AppHeader = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const iconColor = theme === "dark" ? "white" : "black";
  const ThemeIcon = theme === "dark" ? SunIcon : MoonIcon;

  return (
      <NavigationMenu>
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
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link target="_blank" href="https://github.com/ra101/flow">
                  <GithubIcon fill="#888" color={iconColor} />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationGroup>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default AppHeader;