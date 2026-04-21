"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal Hook
 * 
 * This custom hook uses IntersectionObserver to detect when an element enters the viewport.
 * When the element becomes visible, it adds a "show" class to trigger a fade-up animation.
 * 
 * Usage:
 *   const [ref, isVisible] = useReveal();
 *   <div ref={ref} className={`reveal ${isVisible ? 'show' : ''}`}>Content</div>
 * 
 * @returns {[React.RefObject<HTMLElement>, boolean]} - A ref to attach to the element and a boolean indicating visibility
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create an IntersectionObserver that triggers when the element is 20% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element enters the viewport, set it as visible
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can stop observing to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger when 20% of the element is visible
        threshold: 0.2,
        // Start animation slightly before element enters viewport for smoother effect
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup: stop observing when component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [ref, isVisible] as [React.RefObject<T>, boolean];
}

