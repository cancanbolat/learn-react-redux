import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const { dark } = useSelector(state => state.site)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <Header />
      <Counter />
      <CounterActions />
      <Footer />
    </div>
  );
}

export default App;
