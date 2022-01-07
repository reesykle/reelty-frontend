import { MegamenuItem, NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

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
