"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, AlertCircle, Loader2 } from "lucide-react";

interface StreamlitEmbedProps {
  url: string;
  title?: string;
}

export default function StreamlitEmbed({ url, title = "Interactive App" }: StreamlitEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(800);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Ensure URL has embed parameter
  const embedUrl = url.includes("?") 
    ? `${url}&embed=true` 
    : `${url}?embed=true`;

  // Lazy load iframe when in viewport
  useEffect(() => {
    if (!isInView || !iframeRef.current) return;

    const iframe = iframeRef.current;

    // Handle iframe load
    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
      
      // Streamlit apps will send height updates via postMessage
      // We start with a reasonable default height
    };

    // Handle iframe error
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    // Listen for postMessage from Streamlit
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the Streamlit app origin
      try {
        const streamlitOrigin = new URL(url).origin;
        if (event.origin !== streamlitOrigin) return;
      } catch (e) {
        // Invalid URL, ignore message
        return;
      }
      
      if (event.data && typeof event.data === "object") {
        // Streamlit sends height updates via postMessage
        // Check for various possible message formats
        if (event.data.type === "streamlit:setFrameHeight" && event.data.height) {
          const newHeight = Math.max(400, Math.min(2000, event.data.height));
          setHeight(newHeight);
        } else if (event.data.height && typeof event.data.height === "number") {
          // Alternative format: direct height property
          const newHeight = Math.max(400, Math.min(2000, event.data.height));
          setHeight(newHeight);
        }
      } else if (typeof event.data === "number" && event.data > 0) {
        // Some Streamlit versions send height as a number directly
        const newHeight = Math.max(400, Math.min(2000, event.data));
        setHeight(newHeight);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup
    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
      window.removeEventListener("message", handleMessage);
    };
  }, [isInView, url]);

  return (
    <div ref={containerRef} className="w-full">
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-xl border border-border overflow-hidden bg-card"
        >
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading interactive app...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <div className="text-center p-8">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Unable to load app</p>
                <p className="text-muted-foreground mb-4">
                  The interactive app couldn't be loaded. Please try opening it in a new tab.
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="w-full border-0 transition-all duration-300"
            style={{
              height: `${height}px`,
              minHeight: "400px",
              maxHeight: "2000px",
            }}
            title={title}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            aria-label={`Embedded ${title}`}
          />

          {/* Fallback Link */}
          <div className="absolute bottom-4 right-4 z-20">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-background/90 backdrop-blur-sm border border-border rounded-lg hover:bg-muted transition-colors text-foreground opacity-70 hover:opacity-100"
              aria-label="Open app in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open in new tab</span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

