"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, AlertCircle, Loader2 } from "lucide-react";

interface WebAppEmbedProps {
  url: string;
  title?: string;
  embedParams?: string; // e.g., "embed=true" for Streamlit, or empty for Lovable
  initialHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  enableHeightAdjustment?: boolean; // Enable postMessage height adjustment
}

export default function WebAppEmbed({ 
  url, 
  title = "Interactive App",
  embedParams,
  initialHeight = 800,
  minHeight = 400,
  maxHeight = 2000,
  enableHeightAdjustment = true,
}: WebAppEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(initialHeight);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Build embed URL with optional parameters
  const embedUrl = embedParams
    ? (url.includes("?") ? `${url}&${embedParams}` : `${url}?${embedParams}`)
    : url;

  // Lazy load iframe when in viewport
  useEffect(() => {
    if (!isInView || !iframeRef.current) return;

    const iframe = iframeRef.current;

    // Handle iframe load
    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };

    // Handle iframe error
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    // Listen for postMessage for height adjustment (if enabled)
    let handleMessage: ((event: MessageEvent) => void) | null = null;
    
    if (enableHeightAdjustment) {
      handleMessage = (event: MessageEvent) => {
        // Only accept messages from the app origin
        try {
          const appOrigin = new URL(url).origin;
          if (event.origin !== appOrigin) return;
        } catch (e) {
          // Invalid URL, ignore message
          return;
        }
        
        if (event.data && typeof event.data === "object") {
          // Streamlit format: { type: "streamlit:setFrameHeight", height: number }
          if (event.data.type === "streamlit:setFrameHeight" && event.data.height) {
            const newHeight = Math.max(minHeight, Math.min(maxHeight, event.data.height));
            setHeight(newHeight);
          } else if (event.data.height && typeof event.data.height === "number") {
            // Alternative format: direct height property
            const newHeight = Math.max(minHeight, Math.min(maxHeight, event.data.height));
            setHeight(newHeight);
          }
        } else if (typeof event.data === "number" && event.data > 0) {
          // Some apps send height as a number directly
          const newHeight = Math.max(minHeight, Math.min(maxHeight, event.data));
          setHeight(newHeight);
        }
      };

      window.addEventListener("message", handleMessage);
    }

    // Cleanup
    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
      if (handleMessage) {
        window.removeEventListener("message", handleMessage);
      }
    };
  }, [isInView, url, enableHeightAdjustment, minHeight, maxHeight]);

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
              minHeight: `${minHeight}px`,
              maxHeight: `${maxHeight}px`,
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


