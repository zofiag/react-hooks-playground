import React, { useState } from "react";

function useCounter({ initialState }) {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, { increment, decrement, setCount }];
}

export default function CustomHook() {
  const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });

  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
