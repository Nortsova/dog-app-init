import { Button } from '@mui/material';
import './App.css';
import { HeartButton } from './components/atoms/HeartButton';
import { FilterButton } from './components/atoms/FilterButton';
import { Card } from './components/atoms/Card';

function App() {
  return (
    <>
      <Button>
        <HeartButton state="default" />
      </Button>
      <FilterButton state="default" />
      <Card borderRadius={0} variant="primary" />
      <Card borderRadius={10} variant="secondary" />
    </>
  );
}

export default App;
