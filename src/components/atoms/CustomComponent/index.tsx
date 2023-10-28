import { Box, IconButton, SvgIcon } from '@mui/material';
import FilterIconUp from '../../../assets/FilterIconUp.svg?react';

export const CustomComponent = ({ variant }: any) => (
  <>
    <div>Custom Component 123 {variant}</div>
    <Box>
      <IconButton aria-label="some icon">
        <SvgIcon>
          <FilterIconUp />
        </SvgIcon>
      </IconButton>
      Wow, I love icons, because I am a dweeb
    </Box>
  </>
);
