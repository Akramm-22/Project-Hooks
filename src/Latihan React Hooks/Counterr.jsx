import React, { useState } from "react";

function Counterr() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Counter</h2>
      <div style={{ fontSize: 32, margin: 20 }}>{count}</div>
      <button onClick={() => setCount(count - 1)} style={{ fontSize: 24, marginRight: 10 }}>-</button>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: 24 }}>+</button>
    </div>
  );
}

export default Counterr;
