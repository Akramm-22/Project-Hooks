import React, { useState, useCallback } from "react";

function DaftarItem() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const tambahItem = useCallback(() => {
    if (input.trim() !== "") {
      setItems((prev) => [...prev, input]);
      setInput("");
    }
  }, [input]);

  return (
    <div>
      <h2>Daftar Item</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah item"
      />
      <button onClick={tambahItem}>Tambah Item</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DaftarItem;
