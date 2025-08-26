import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current && inputRef.current.focus(),
  }));
  return <input ref={inputRef} {...props} />;
});

function ParentCustomInput() {
  const inputRef = useRef();
  return (
    <div>
      <h2>Custom Input (useImperativeHandle)</h2>
      <CustomInput ref={inputRef} placeholder="Klik tombol untuk fokus" />
      <button onClick={() => inputRef.current.focus()} style={{ marginLeft: 8 }}>Fokus ke Input</button>
    </div>
  );
}

export default ParentCustomInput;
