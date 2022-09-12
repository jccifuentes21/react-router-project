import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/react-router-project/" exact>
          <Redirect to="/react-router-project/quotes" />
        </Route>
        <Route path="/react-router-project/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/react-router-project/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/react-router-project/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
