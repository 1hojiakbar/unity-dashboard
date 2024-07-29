import bagIcon from "../assets/icons/bag.svg";
import activityIcon from "../assets/icons/activity.svg";
import chartIcon from "../assets/icons/chart.svg";
import discoveryIcon from "../assets/icons/discovery.svg";
import walletIcon from "../assets/icons/wallet.svg";
import documentIcon from "../assets/icons/document.svg";
import settingIcon from "../assets/icons/setting.svg";

interface ItemType {
  id: number;
  title: string;
  path: string;
  className: string;
  icon: string;
  notfication?: string | number;
}

type SidebarData = ItemType[];

const className = `flex items-center text-secondary h-14 py-2.5 px-4 rounded-xl space-x-3 transition duration-200 hover:bg-active-color hover:text-white-color`;

const sidebarItem: SidebarData = [
  {
    id: 1,
    title: "Overview",
    path: "/",
    className,
    icon: bagIcon,
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    className,
    icon: activityIcon,
  },
  {
    id: 3,
    title: "Campaigns",
    path: "/campaigns",
    className,
    icon: chartIcon,
  },
  {
    id: 4,
    title: "Schedules",
    path: "/",
    className,
    icon: discoveryIcon,
  },
  {
    id: 5,
    title: "Payouts",
    path: "/",
    className,
    icon: walletIcon,
  },
  {
    id: 6,
    title: "Statement",
    path: "/",
    className,
    icon: documentIcon,
  },
  {
    id: 7,
    title: "Settings",
    path: "/",
    className,
    icon: settingIcon,
  },
];

export default sidebarItem;
