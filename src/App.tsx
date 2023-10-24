import { Button } from '@mui/material';
import './App.css';
import { HeartButton } from './components/atoms/HeartButton';
import { FilterButton } from './components/atoms/FilterButton';

function App() {
  return (
    <>
      <Button>
        <HeartButton state="default" />
      </Button>
      <Button variant="contained" color="secondary">
        <FilterButton state="default" />
      </Button>
    </>
  );
}

export default App;
