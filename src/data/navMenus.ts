import { INavItem, INavMenuItem } from "@/types";
import {
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { getFullPath } from "@/utils/getFullPath";

const navMenus: INavMenuItem[] = [
  {
    id: "about",
    title: "About",
    path: getFullPath("/#about"),
    section: "about",
  },
  {
    id: "services",
    title: "Services",
    path: getFullPath("/#services"),
    section: "services",
  },
  {
    id: "experiences",
    title: "Experiences",
    path: getFullPath("/#experiences"),
    section: "experiences",
  },
  {
    id: "skills",
    title: "Skills",
    path: getFullPath("/#skills"),
    section: "skills",
  },
  {
    id: "projects",
    title: "Projects",
    path: getFullPath("/#projects"),
    section: "projects",
  },
  {
    id: "contact",
    title: "Contact",
    path: getFullPath("/#contact"),
    section: "contact",
  },
];

export default navMenus;

export const menuItems: INavItem[] = [
  {
    name: "About",
    link: getFullPath("/#about"),
    icon: faUser,
  },
  {
    name: "Services",
    link: getFullPath("/#services"),
    icon: faBriefcase,
  },
  {
    name: "Experiences",
    link: getFullPath("/#experiences"),
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: getFullPath("/#skills"),
    icon: faAward,
  },
  {
    name: "Projects",
    link: getFullPath("/#projects"),
    icon: faLaptopCode,
  },
  {
    name: "Contact",
    link: getFullPath("/#contact"),
    icon: faEnvelope,
  },
];
