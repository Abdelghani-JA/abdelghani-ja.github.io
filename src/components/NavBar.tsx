import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu className="w-full max-w-[25rem] shadow-shadow *:first:w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Blogs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const NavBar = () => {
  return (
    <header className="sticky top-0 left-0 z-1 flex w-full justify-center p-1">
      <NavMenu />
    </header>
  );
};
