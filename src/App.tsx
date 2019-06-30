import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PLThemeProvider from './components/ThemeProvider';
import LoginScreen from "./components/LoginScreen";

const App: React.FC = () => {
  return (
    <PLThemeProvider>
      <Router>
        <Route path="/" component={LoginScreen} />
      </Router>
    </PLThemeProvider>
  );
}

export default App;
