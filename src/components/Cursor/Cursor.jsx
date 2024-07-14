import React, { useState, useEffect } from "react";
import {
  CircularBorderWrapper,
  CursorContainer,
  InnerCircle,
} from "./Cursor.Style";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [innerCirclePosition, setInnerCirclePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCursorPosition({ x, y });

      // Calculate the inner circle position
      const outerCircleRadius = 20; // Radius limit for the inner circle
      const deltaX = x - (cursorPosition.x || x);
      const deltaY = y - (cursorPosition.y || y);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < outerCircleRadius) {
        setInnerCirclePosition({ x: deltaX, y: deltaY });
      } else {
        const ratio = outerCircleRadius / distance;
        setInnerCirclePosition({ x: deltaX * ratio, y: deltaY * ratio });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);

  return (
    <CircularBorderWrapper>
      <CursorContainer
        style={{
          left: `${cursorPosition.x - 20}px`,
          top: `${cursorPosition.y - 20}px`,
        }}
      >
        <InnerCircle
          style={{
            transform: `translate(${innerCirclePosition.x}px, ${innerCirclePosition.y}px)`,
          }}
        />
      </CursorContainer>
    </CircularBorderWrapper>
  );
};

export default Cursor;
