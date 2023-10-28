import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import HeartYellowShadow from '../../../assets/HeartYellowShadow.svg?react';
import HeartYellowBorder from '../../../assets/HeartYellowBorder.svg?react';
import HeartYellowHover from '../../../assets/HeartYellowHover.svg?react';

type HeartButtonProps = {
  state: 'hover' | 'active' | 'default';
};

export const HeartButton: FC<HeartButtonProps> = ({ state }) => {
  switch (state) {
    case 'hover':
      return <SvgIcon component={HeartYellowHover} inheritViewBox />;
    case 'active':
      return <SvgIcon component={HeartYellowShadow} inheritViewBox />;
    default:
      return <SvgIcon component={HeartYellowBorder} inheritViewBox />;
  }
};
