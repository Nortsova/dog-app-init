import { NavLink } from 'react-router-dom';
import { Button, styled } from '@mui/material';

const headerMenu = [
  {
    id: 1,
    title: 'Main',
    path: '/'
  },
  {
    id: 2,
    title: 'Breeds',
    path: '/breed'
  },
  {
    id: 3,
    title: 'Vote',
    path: '/vote'
  },
  {
    id: 4,
    title: 'History',
    path: '/history'
  },
  {
    id: 5,
    title: 'Your uploads',
    path: '/upload'
  }
];

const CustomizedButton = styled(Button)`
  margin-right: 50px;
  padding: 4px 10px;
`;

export const NavBar = () => (
  <>
    {headerMenu.map(item => (
      <NavLink to={item.path} key={item.id}>
        {({ isActive }) => (
          <CustomizedButton
            variant={isActive ? 'contained' : 'text'}
            key={item.id}
          >
            {item.title}
          </CustomizedButton>
        )}
      </NavLink>
    ))}
  </>
);
