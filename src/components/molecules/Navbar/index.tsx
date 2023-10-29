import { Stack } from '@mui/material';
import { NavbarItem } from '../../atoms/NavbarItem';

const pages = ['Main', 'Breeds', 'Vote', 'History', 'Your uploads'];

const Navbar = () => (
  <Stack direction="row" spacing={6}>
    {pages.map(page => (
      <NavbarItem key={page}>{page}</NavbarItem>
    ))}
  </Stack>
);
export default Navbar;
