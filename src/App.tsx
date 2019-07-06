import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";
import PLThemeProvider from './components/ThemeProvider';

const App: React.FC = () => {
  // const [signedIn] = useAuth();
  useFirebase();

  return (
    <PLThemeProvider>
      {/* {
        signedIn
        ? <SingedIn />
        : <SignedOut />
       } */}
      <Router>
        <Routes />
      </Router>
    </PLThemeProvider>
  );
}

export default App;
