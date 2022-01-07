import { ChevronDownIcon } from "@heroicons/react/solid";
import * as React from 'react';
import { Link } from 'gatsby';

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
}
export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: React.FC<NavigationItemProps> = ( {menuItem} ) => {

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
        <Link
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            to={item.href}
            activeClassName="!font-semibold !text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-100"
        >
          {item.name}
          {item.type && (
              <ChevronDownIcon
                  className="ml-1 -mr-1 h-4 w-4 text-neutral-400"
                  aria-hidden="true"
              />
          )}
        </Link>
    );
  };

  return <li className="menu-item">{renderMainItem(menuItem)}</li>;
};

export default NavigationItem;
