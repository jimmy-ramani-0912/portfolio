import React, { useState, useEffect } from "react";
import { CircularBorderWrapper, CursorContainer } from "./Cursor.Style";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCursorPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CircularBorderWrapper>
      <CursorContainer
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
    </CircularBorderWrapper>
  );
};

export default Cursor;
