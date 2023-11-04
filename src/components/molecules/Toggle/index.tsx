import { Button } from '@mui/material';
import { useState } from 'react';

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prev => !prev);
  return (
    <>
      <Button data-testid="toggle-btn" onClick={handleToggle}>
        Toggle
      </Button>
      {toggle && <div data-testid="expanded">expanded</div>}
    </>
  );
};
