import { useState } from 'react';
import { Button } from '@mui/material';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
      <Button className="card-button" variant="outlined">outlined primary</Button><br/>
      <Button className="card-button" variant="outlined">outlined secondary</Button><br/>
      <Button className="card-button" variant="contained">contained primary</Button><br/>
      <Button className="card-button" variant="contained">contained secondary</Button>
      </div>
    </>
  );
}

export default App;
