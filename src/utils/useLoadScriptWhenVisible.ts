import { useEffect, type RefObject } from 'react';
import { loadScriptOnce } from './loadScriptOnce';

/**
 * Load a third-party script when `elementRef` approaches the viewport.
 * Avoids competing with LCP for below-fold embeds (Elfsight, Youform, etc.).
 */
export function useLoadScriptWhenVisible(
  elementRef: RefObject<Element | null>,
  src: string,
  options: { async?: boolean; defer?: boolean; rootMargin?: string } = {}
): void {
  const { async = true, defer = false, rootMargin = '200px 0px' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const load = () => loadScriptOnce(src, { async, defer });

    if (typeof IntersectionObserver === 'undefined') {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, src, async, defer, rootMargin]);
}
