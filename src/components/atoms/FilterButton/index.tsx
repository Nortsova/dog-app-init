import { SvgIcon, styled } from '@mui/material';
import { FC } from 'react';
import theme from '../../../theme/theme';

import FilterIconUp from '../../../assets/FilterIconUp.svg?react';
import FilterIconDown from '../../../assets/FilterIconDown.svg?react';
import FilterIconRandom from '../../../assets/FilterIconRandom.svg?react';

const StyledFilterButton = styled('button')({
  backgroundColor: '#E6E6E6',
  padding: theme.spacing(1, 2),
  borderRadius: 6,
  boxShadow: '3px 3px 0px 0px #000;',
  border: '0.6px solid #090808',
  transition: 'box-shadow .2s ease',
  '&:hover': {
    boxShadow: '3px 3px 0px 0px #FFCF32;',
    border: '1px solid #FFCF32',
    backgroundColor: 'transparent',
    outline: 'none'
  },
  '&:active, &:focus': {
    boxShadow: 'none',
    border: '1px solid #FFCF32',
    backgroundColor: 'transparent',
    outline: '#FFCF32'
  }
});

type FilterButtonProps = {
  state: 'default' | 'down' | 'random';
};

export const FilterButton: FC<FilterButtonProps> = ({ state }) => {
  switch (state) {
    case 'down':
      return (
        <StyledFilterButton>
          <SvgIcon component={FilterIconDown} inheritViewBox />
        </StyledFilterButton>
      );
    case 'random':
      return (
        <StyledFilterButton>
          <SvgIcon component={FilterIconRandom} inheritViewBox />
        </StyledFilterButton>
      );
    default:
      return (
        <StyledFilterButton>
          <SvgIcon component={FilterIconUp} inheritViewBox />
        </StyledFilterButton>
      );
  }
};
