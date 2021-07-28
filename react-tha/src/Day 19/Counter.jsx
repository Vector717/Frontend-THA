import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let counterUpdate = () => {
    setCount(count + 1);
  }
  
  return <button onClick={counterUpdate}>{count}</button>;
};

export default Counter;