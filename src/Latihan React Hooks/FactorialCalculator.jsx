import React, { useState, useMemo } from "react";

function factorial(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [other, setOther] = useState(0);
  const fact = useMemo(() => factorial(number), [number]);
  return (
    <div>
      <h2>Faktorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>Hasil: {fact}</p>
      <input
        type="text"
        value={other}
        onChange={(e) => setOther(e.target.value)}
        placeholder="Input lain (tidak memicu kalkulasi)"
      />
    </div>
  );
}

export default FactorialCalculator;
