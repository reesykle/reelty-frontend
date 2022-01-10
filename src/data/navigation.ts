import { MegamenuItem, NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoId";

export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home"
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search"
  },
  {
    id: ncNanoId(),
    href: "/portfolio",
    name: "Portfolio"
  },
];
