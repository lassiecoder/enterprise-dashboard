import * as React from "react";

// Mobile breakpoint at 1024px - matches tablet/desktop boundary
const MOBILE_BREAKPOINT = 1024;

/**
 * useIsMobile Hook
 *
 * Detects if the viewport is below the mobile breakpoint (1024px)
 * Listens for window resize events to update in real-time
 *
 * @returns boolean - true if viewport width < 1024px, false otherwise
 */
export function useIsMobile() {
  // Initialize as undefined to avoid hydration mismatch (SSR)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Create media query listener for viewport width
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Update state when viewport size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Listen for changes and set initial value
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Convert undefined to false for cleaner boolean return
  return !!isMobile;
}
