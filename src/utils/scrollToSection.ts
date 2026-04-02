/**
 * Smooth-scroll utility for in-page section navigation.
 * Centralized to avoid duplicate scroll logic across components.
 */
export function scrollToSection(sectionId: string): void {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}
