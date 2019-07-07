import { auth, initializeApp } from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const Auth = (function() {
  const persistedAuthStateKey = "projectLinkIsAuthenticated"

  initializeApp(firebaseConfig);

  const providers = {
    google: new auth.GoogleAuthProvider(),
    email: new auth.EmailAuthProvider(),
  }

  function handleAuthError(message: string, error?: Error) {
    console.warn(message);
  }

  return {
    init: function() {
      auth().useDeviceLanguage()
    },
    /**
     * Adds an observer to user's auth state
     */
    onAuthStateChanged: function(cb: () => void) {
      auth().onAuthStateChanged(cb);
    },

    /**
     * Stores whether a user is is logged in
     * or not on window.localStorage
     */
    persistAuthState: function(authenticated: boolean) {
      if (!localStorage) {
        handleAuthError("localStorage not found");
      }

      if (authenticated) {
        localStorage.setItem(persistedAuthStateKey, "true")
        localStorage.setItem("touched", "true")
      } else {
        localStorage.removeItem(persistedAuthStateKey);
      }
    },

    /**
     * Returns whether a user has a persisted
     * session
     */
    currentUserIsAuthenticated: function() {
      if (!localStorage) {
        handleAuthError("localStorage not found");
      }
      return Boolean(localStorage.getItem(persistedAuthStateKey));
    },

    /**
     * Returns whether a user has a persisted
     * session
     */
    currentUserIsReturning: function() {
      if (!localStorage) {
        handleAuthError("localStorage not found");
      }
      return localStorage.getItem("touched") === "true";
    }
  }
})();

export default Auth;
