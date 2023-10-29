import './App.css';
import { Card } from './components/atoms/Card';
import { Header } from './components/organisms/Header';

function App() {
  return (
    <>
      <Header />
      <Card borderRadius={0} variant="primary" />
      <Card borderRadius={10} variant="secondary" />
    </>
  );
}

export default App;
