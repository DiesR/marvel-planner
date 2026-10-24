import { Info } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { computePlacement, type Placement } from "./placement";

const HOVER_OPEN_DELAY_MS = 150;
const HOVER_CLOSE_DELAY_MS = 100;

interface InfoTipProps {
  label: string;
  children: ReactNode;
  placement?: Placement;
}

export function InfoTip({ label, children, placement = "top" }: InfoTipProps) {
  const bubbleId = useId();
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const pointerTypeRef = useRef("mouse");
  const [isOpen, setIsOpen] = useState(false);

  const clearTimer = () => window.clearTimeout(timerRef.current);

  const schedule = (open: boolean, delay: number) => {
    clearTimer();
    timerRef.current = window.setTimeout(() => setIsOpen(open), delay);
  };

  const position = useCallback(() => {
    const bubble = bubbleRef.current;
    const icon = triggerRef.current?.querySelector("svg");
    if (!bubble || !icon) return;

    const anchor = icon.getBoundingClientRect();
    const result = computePlacement(
      anchor,
      { width: bubble.offsetWidth, height: bubble.offsetHeight },
      { width: window.innerWidth, height: window.innerHeight },
      placement,
    );
    bubble.dataset.placement = result.placement;
    bubble.style.left = `${result.left}px`;
    bubble.style.top = `${result.top}px`;
    bubble.style.setProperty("--tip-arrow", `${result.arrow}px`);
  }, [placement]);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    if (!isOpen) {
      if (bubble.matches(":popover-open")) bubble.hidePopover();
      return;
    }

    bubble.showPopover();
    position();

    const close = (event: Event) => {
      if (event.type === "pointerdown" && wrapperRef.current?.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", position, true);
    window.addEventListener("resize", position);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", position, true);
      window.removeEventListener("resize", position);
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, position]);

  useEffect(() => clearTimer, []);

  return (
    <span
      ref={wrapperRef}
      className="info-tip"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") schedule(true, HOVER_OPEN_DELAY_MS);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") schedule(false, HOVER_CLOSE_DELAY_MS);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="info-tip__trigger"
        aria-label={label}
        aria-describedby={bubbleId}
        onPointerDown={(event) => {
          pointerTypeRef.current = event.pointerType;
        }}
        onFocus={() => {
          clearTimer();
          setIsOpen(true);
        }}
        onBlur={() => {
          clearTimer();
          setIsOpen(false);
        }}
        onClick={() => {
          if (pointerTypeRef.current !== "mouse") setIsOpen((current) => !current);
        }}
      >
        <Info aria-hidden />
      </button>
      <div
        ref={bubbleRef}
        id={bubbleId}
        className="info-tip__bubble"
        role="tooltip"
        popover="manual"
        onPointerEnter={clearTimer}
      >
        {children}
      </div>
    </span>
  );
}
