import { lazy, Suspense } from "react";
import styles from "./index.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Fallback from "components/Fallback";
import ScrollToTop from "components/ScrollToTop";

const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));

const Layout = () => {
  return (
    <Router basename="/React-Movies-App">
      <Paper square className={styles.root}>
        <ScrollToTop />
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:movieId">
              <MovieDetails />
            </Route>
          </Switch>
        </Suspense>
      </Paper>
    </Router>
  );
};

export default Layout;
