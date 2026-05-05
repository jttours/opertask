"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js" as const;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

function findCalendlyScript(): HTMLScriptElement | undefined {
  return Array.from(document.scripts).find((s) => s.src === SCRIPT_SRC);
}

export function CalendlyEmbed({
  url,
  minHeight = 650,
  containerId,
  className,
}: {
  url: string;
  minHeight?: number;
  containerId?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasError) return;
    if (el.getAttribute("data-processed") === "true") return;

    let cancelled = false;

    const initWidget = () => {
      if (
        cancelled ||
        !containerRef.current ||
        containerRef.current !== el ||
        el.getAttribute("data-processed") === "true" ||
        !window.Calendly
      ) {
        return;
      }
      window.Calendly.initInlineWidget({
        url,
        parentElement: el,
      });
      el.setAttribute("data-processed", "true");
    };

    const onScriptError = () => {
      if (!cancelled) setHasError(true);
    };

    const onLoad = () => initWidget();

    if (window.Calendly) {
      initWidget();
      return () => {
        cancelled = true;
      };
    }

    let trackedScript = findCalendlyScript();

    if (!trackedScript) {
      trackedScript = document.createElement("script");
      trackedScript.src = SCRIPT_SRC;
      trackedScript.async = true;
      trackedScript.onerror = onScriptError;
      trackedScript.addEventListener("error", onScriptError);
      trackedScript.addEventListener("load", onLoad);
      document.body.appendChild(trackedScript);
    } else {
      trackedScript.addEventListener("error", onScriptError);
      trackedScript.addEventListener("load", onLoad);
      queueMicrotask(() => {
        if (window.Calendly && !cancelled) initWidget();
      });
    }

    return () => {
      cancelled = true;
      trackedScript?.removeEventListener("error", onScriptError);
      trackedScript?.removeEventListener("load", onLoad);
    };
  }, [url, hasError]);

  if (hasError) {
    return (
      <div className="text-center py-12">
        <p className="mb-4 text-ink-2">Booking calendar unavailable</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Open booking page →
        </a>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id={containerId}
      data-url={url}
      style={{ minHeight }}
      className={[className, "max-w-full min-w-0 overflow-x-clip"].filter(Boolean).join(" ")}
    />
  );
}
