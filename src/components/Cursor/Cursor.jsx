import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  CircularBorderWrapper,
  CursorDot,
  CursorRing,
  RingGlow,
} from "./Cursor.Style";

const lerp = (a, b, t) => a + (b - a) * t;

const Cursor = () => {
  const theme = useTheme();
  const [enabled, setEnabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  const ringEl = useRef(null);
  const dotEl = useRef(null);
  const primed = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const onMq = () => setEnabled(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    document.body.classList.add("use-custom-cursor");
    return () => {
      document.body.classList.remove("use-custom-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return undefined;
    primed.current = false;

    const tick = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;
      ring.current.x = lerp(ring.current.x, mx, 0.32);
      ring.current.y = lerp(ring.current.y, my, 0.32);
      dot.current.x = lerp(dot.current.x, mx, 0.52);
      dot.current.y = lerp(dot.current.y, my, 0.52);
      const rx = ring.current.x;
      const ry = ring.current.y;
      const dx = dot.current.x;
      const dy = dot.current.y;
      const tfRing = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      const tfDot = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      if (ringEl.current) ringEl.current.style.transform = tfRing;
      if (dotEl.current) dotEl.current.style.transform = tfDot;
      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!primed.current) {
        primed.current = true;
        mouse.current = { x, y };
        ring.current = { x, y };
        dot.current = { x, y };
      } else {
        mouse.current = { x, y };
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <CircularBorderWrapper>
      <CursorRing
        ref={ringEl}
        $primary={theme.primary}
        style={{
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
        }}
      >
        <RingGlow $primary={theme.primary} />
      </CursorRing>
      <CursorDot
        ref={dotEl}
        $primary={theme.primary}
        style={{
          transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
        }}
      />
    </CircularBorderWrapper>
  );
};

export default Cursor;
