import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // useDebugValue for React DevTools
  React.useDebugValue(`localStorage:${key}`);

  return [value, setValue];
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <h2>useLocalStorage (useDebugValue)</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nama..." />
      <p>Nama di localStorage: {name}</p>
    </div>
  );
}

export default LocalStorageDemo;
