import React, {useState} from 'react';
import Spinner from './components/Spinner';
import { useDarkmode } from './hooks';

const App: React.FC = () => {
  useDarkmode();

  return (
    <div className="App">
      <header className="App-header">
        <Spinner />
      </header>
    </div>
  );
}

export default App;
