'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationGroup,
  NavigationMenuSeparator,
} from "@/components/composites/navigation-menu"
import { useTheme } from "next-themes"

import {  SidebarTrigger } from "@/components/composites/sidebar";
import { CoffeeIcon, GithubIcon, MoonIcon, SunIcon, User2Icon } from "lucide-react";
import { SimpleTooltip } from "@/components/primitives/tooltip";


const NavBar = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const iconColor = theme === "dark" ? "white" : "black";
  const ThemeIcon = theme === "dark" ? SunIcon : MoonIcon;
  const ThemeTip = theme === "dark" ? "Light Mode" : "Dark Mode";

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
              <SimpleTooltip tip={ThemeTip}>
                <NavigationMenuLink>
                  <ThemeIcon fill="white" color={iconColor} onClick={toggleTheme}/>
                </NavigationMenuLink>
              </SimpleTooltip>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SimpleTooltip tip="Login">
                <NavigationMenuLink>
                  <User2Icon  fill="white" color={iconColor} />
                </NavigationMenuLink>
              </SimpleTooltip>
            </NavigationMenuItem>
            <NavigationMenuSeparator />
            <NavigationMenuItem>
              <SimpleTooltip tip="source_code">
                <NavigationMenuLink target="_blank" href="https://github.com/ra101/flow">
                  <GithubIcon fill="#888" color={iconColor} />
                </NavigationMenuLink>
              </SimpleTooltip>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SimpleTooltip tip="Sponsor">
                <NavigationMenuLink target="_blank" href="https://coff.ee/ra101">
                  <CoffeeIcon fill="#c70" color={iconColor} />
                </NavigationMenuLink>
              </SimpleTooltip>
            </NavigationMenuItem>
          </NavigationGroup>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default NavBar;