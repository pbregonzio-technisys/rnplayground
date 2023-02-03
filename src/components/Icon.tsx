import * as React from 'react';
import { SvgProps } from 'react-native-svg';

import BankIcon from '../assets/icons/bank.svg';
import BellIcon from '../assets/icons/bell.svg';
import CoinPileIcon from '../assets/icons/coin-pile.svg';
import DollarIcon from '../assets/icons/dollar.svg';
import LeftArrowIcon from '../assets/icons/left-arrow.svg';
import LogOutIcon from '../assets/icons/log-out.svg';
import MenuIcon from '../assets/icons/menu.svg';
import RightCaretIcon from '../assets/icons/right-caret.svg';
import SmileIcon from '../assets/icons/smile.svg';
import VerticalEllipsisIcon from '../assets/icons/vertical-ellipsis.svg';
import WalletIcon from '../assets/icons/wallet.svg';

const getGlyph = {
  bank: BankIcon,
  bell: BellIcon,
  ['coin-pile']: CoinPileIcon,
  dollar: DollarIcon,
  ['left-arrow']: LeftArrowIcon,
  ['log-out']: LogOutIcon,
  menu: MenuIcon,
  ['right-caret']: RightCaretIcon,
  smile: SmileIcon,
  ['vertical-ellipsis']: VerticalEllipsisIcon,
  wallet: WalletIcon,
};

export type IconGlyphsType = keyof typeof getGlyph;

export type IconPropsType = {
  name: IconGlyphsType;
  size?: number;
} & SvgProps;

export const Icon = ({ name, size = 24, ...rest }: IconPropsType) => {
  const Glyph = getGlyph[name];

  return <Glyph {...rest} width={size} height={size} />;
};
