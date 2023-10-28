import { SvgIcon } from '@mui/material';
import { FC } from 'react';

import PlusButtonActive from '../../../assets/PlusButtonActive.svg?react';
import PlusButtonDefault from '../../../assets/PlusButtonDefault.svg?react';

type PlusButtonProps = {
  state: 'active' | 'default';
};

export const PlusButton: FC<PlusButtonProps> = ({ state }) => {
  switch (state) {
    case 'active':
      return <SvgIcon component={PlusButtonActive} inheritViewBox />;
    default:
      return <SvgIcon component={PlusButtonDefault} inheritViewBox />;
  }
};
