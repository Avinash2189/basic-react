import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const incrementVal = () => {
    count = count + 1;

    if (count >= 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }

    // setCount(count);
  };

  const decrementVal = () => {
    count = count - 1;
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Hellow world :: {count}</h1>
      <h2>I am not here</h2>
      <button onClick={incrementVal}>Increment</button>
      <button onClick={decrementVal}>Decrement</button>
    </>
  );
}

export default App;
