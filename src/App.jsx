import { useState } from "react";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount();
  };

  return (
    <h1>
      HelloWorld {count} {increment}
    </h1>
  );
}

export default App;
