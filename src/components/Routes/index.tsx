import React, {Suspense} from "react";
import { Route } from "react-router-dom";

/**
 * Routes
 */
const LoginScreen = React.lazy(() => import("../../screens/SignedOut"));
// const Home = React.lazy(() => import("../../screens/Home"));
import Spinner from "../Spinner";

const Routes = () => <Suspense fallback={Spinner}>
    <Route path="/" component={LoginScreen} />
    {/* <Route path="/home" component={Home} /> */}
  </Suspense>

export default Routes;
