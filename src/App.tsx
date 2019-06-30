import React from 'react';
import PLThemeProvider from './components/ThemeProvider';

const App: React.FC = () => {
  return (
    <PLThemeProvider>
      <h1>
        hello, world
      </h1>
    </PLThemeProvider>
  );
}

export default App;
