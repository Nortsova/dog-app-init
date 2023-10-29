import { Link, SvgIcon } from '@mui/material';

import LogoIcon from '../../../assets/LogoIcon.svg?react';

export const Logo = () => (
  <Link href="/" underline="none">
    <SvgIcon
      component={LogoIcon}
      inheritViewBox
      sx={{ width: 201, height: 40 }}
    />
  </Link>
);
