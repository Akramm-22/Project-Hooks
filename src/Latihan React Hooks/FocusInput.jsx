import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>Form Input (Auto Focus)</h2>
      <input ref={inputRef} type="text" placeholder="Ketik sesuatu..." />
    </div>
  );
}

export default FocusInput;
