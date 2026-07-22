/**
 * Inject an external script tag once. Safe for React Strict Mode / HMR.
 */
export function loadScriptOnce(
  src: string,
  options: { async?: boolean; defer?: boolean } = {}
): void {
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement('script');
  script.src = src;
  if (options.async) script.async = true;
  if (options.defer) script.defer = true;
  document.body.appendChild(script);
}
