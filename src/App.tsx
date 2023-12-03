import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import theme from './theme/theme';

const StyledAllBox = styled(Box)({
  width: '1440px',
  backgroundColor: theme.palette.primary.contrastText
});

const StyledBox = styled(Box)({
  width: '1160px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '24px',
  paddingBottom: '35px'
});

function App() {
  return (
    <StyledAllBox>
      <Header />
      <StyledBox>
        <Outlet />
      </StyledBox>
    </StyledAllBox>
  );
}

export default App;
