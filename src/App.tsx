import './App.css';
import { FilterButton } from './components/atoms/FilterButton';
import { Card } from './components/atoms/Card';
import { Logo } from './components/atoms/Logo';

function App() {
  return (
    <>
      <Logo />
      <FilterButton state="default" />
      <Card borderRadius={0} variant="primary" />
      <Card borderRadius={10} variant="secondary" />
    </>
  );
}

export default App;
