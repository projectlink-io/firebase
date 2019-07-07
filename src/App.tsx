import React from "react";

import PLThemeProvider from './components/ThemeProvider';
import SignedOut from "./screens/SignedOut";
import SignedIn from "./screens/SignedIn";
import Auth from "./services/auth";

const App: React.FC = () => {
  Auth.init();
  let signedIn = Auth.currentUserIsAuthenticated();

  return (
    <PLThemeProvider>
      {
        signedIn
        ? <SignedIn />
        : <SignedOut />
       }
    </PLThemeProvider>
  );
}

export default App;
