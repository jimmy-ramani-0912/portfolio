import { useCallback } from "react";

function setSpotFromEvent(el, clientX, clientY) {
  const r = el.getBoundingClientRect();
  const x = clientX - r.left;
  const y = clientY - r.top;
  el.style.setProperty("--spot-x", `${x}px`);
  el.style.setProperty("--spot-y", `${y}px`);
}

export function useSpotlightCardHandlers() {
  const onPointerMove = useCallback((e) => {
    if (e.pointerType === "touch") return;
    setSpotFromEvent(e.currentTarget, e.clientX, e.clientY);
  }, []);

  const onPointerEnter = useCallback((e) => {
    if (e.pointerType === "touch") return;
    setSpotFromEvent(e.currentTarget, e.clientX, e.clientY);
  }, []);

  const onPointerLeave = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${r.width / 2}px`);
    el.style.setProperty("--spot-y", `${r.height / 2}px`);
  }, []);

  return {
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
  };
}
