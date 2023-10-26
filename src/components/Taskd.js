import React, { useState } from "react";

export default function Event() {
  let initialCount = 0;

  const [counter, setCounter] = useState(0);

  const handleReset = () => {
    setCounter(initialCount);
  };

  return (
    <>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>This Is Task D</h1>
        <div>
          <p>Count: {counter}</p>
        </div>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
