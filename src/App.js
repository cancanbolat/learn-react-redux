import { useState } from "react";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterActions />      
    </div>
  );
}

export default App;
