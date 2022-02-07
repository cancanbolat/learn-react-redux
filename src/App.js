import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routes } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const { dark } = useSelector(state => state.site)

  return (
    <Router>
      <div className={dark ? 'dark' : 'light'}>
        <Header />
        {/* <Counter /> <CounterActions /> */}
        <Switch>
          {routes.map(route => (
            <Route exact={route.exact} path={route.path}>
                <route.component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
