import { Button } from '@mui/material';

export const NavbarItem = ({ children }: { children: string }) => (
  <Button
    variant="text"
    sx={{ padding: 0, color: '#5F556D', whiteSpace: 'nowrap' }}
  >
    {children}
  </Button>
);
