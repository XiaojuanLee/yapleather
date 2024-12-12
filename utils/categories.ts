import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaKey } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { PiCardholderFill } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { TbMickeyFilled } from "react-icons/tb";
import { GiHeartNecklace } from "react-icons/gi";
import { PiCowFill } from "react-icons/pi";
import { IconType } from "react-icons/lib";


type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'All'
  | 'Keychain'
  | 'Apple'
  | 'Cardholder'
  | 'Wallet'
  | 'Bag Charm'
  | 'Choker'
  | 'Others';

export const categories: Category[] = [
  {
    label: 'All',
    icon: TfiLayoutGrid3Alt,
  },
  {
    label: 'Keychain',
    icon: FaKey,
  },
  {
    label: 'Apple',
    icon: FaApple,
  },
  {
    label: 'Cardholder',
    icon: PiCardholderFill,
  },
  {
    label: 'Wallet',
    icon: IoWallet,
  },
  {
    label: 'Bag Charm',
    icon: TbMickeyFilled,
  },
  {
    label: 'Choker',
    icon: GiHeartNecklace,
  },
  {
    label: 'Others',
    icon: PiCowFill,
  },
];
