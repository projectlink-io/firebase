import { auth } from "firebase";

class Auth implements Auth {
  providers = {
    google: new auth.GoogleAuthProvider(),
    email: new auth.EmailAuthProvider(),
  }
  persistedAuthStateKey = "authenticatedWithProjectLink"
  
  public constructor() {
    auth().useDeviceLanguage();
  }

  public onAuthStateChanged(cb: () => void) {
    auth().onAuthStateChanged(cb);
  }

  public persistAuthState(authenticated: boolean) {
    if (!localStorage) {
      this.handleAuthError("localStorage not found");
    }

    if (authenticated) {
      localStorage.setItem(this.persistedAuthStateKey, "true")
    } else {
      localStorage.clear()
    }
  }

  public getPersistedAuthState() {
    if (!localStorage) {
      this.handleAuthError("localStorage not found");
    }
    return localStorage.getItem(this.persistedAuthStateKey);
  }

  private handleAuthError(message: string, error?: Error) {
    console.warn(message);
    // Sentry log errors!
    // Display user feedback!
  }
}

interface Auth {

  /**
   * Listens to changes in firebase auth
   */
  onAuthStateChanged: (cb: () => void) => void;

  /**
   * Store auth information on localStorage
   * so we can immediately sign people in
   */
  persistAuthState: (p: PersistedAuthState) => void;

  /**
   * Handles errors that are not handled by
   * injected error handlers
   */
  handleAuthError: (message: string, error?: Error) => void;
}

interface PersistedAuthState {
  isAuthenticated: boolean;
}

export default Auth;
