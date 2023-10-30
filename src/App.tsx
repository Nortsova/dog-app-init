import { NavLink, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import reactLogo from './assets/react.svg';

import './App.css';

const headerMenu = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Breed',
    path: '/breed'
  },
  {
    title: 'Vote',
    path: '/vote'
  },
  {
    title: 'History',
    path: '/history'
  }
];
function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {headerMenu.map(item => (
        <NavLink to={item.path}>
          {({ isActive }) => (
            <Box
              sx={{
                color: isActive ? 'success.light' : 'inherit'
              }}
            >
              {item.title}
            </Box>
          )}
        </NavLink>
      ))}
      <Outlet />
    </>
  );
}

export default App;
