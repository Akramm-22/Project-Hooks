import React, { useLayoutEffect, useState } from "react";

function ScrollPosition() {
  const [pos, setPos] = useState(window.scrollY);
  useLayoutEffect(() => {
    const handleScroll = () => setPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, right: 0, background: "#eee", padding: 8, zIndex: 1000 }}>
      <strong>Scroll Y:</strong> {pos}
    </div>
  );
}

export default ScrollPosition;
