import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';

// jsdom implements neither observer; framer-motion's `whileInView` needs
// IntersectionObserver. No-op stubs let components mount without crashing.
class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver =
  NoopObserver as unknown as typeof IntersectionObserver;
globalThis.ResizeObserver = NoopObserver as unknown as typeof ResizeObserver;

// jsdom has no matchMedia. Assume a desktop "fine pointer" so pointer-dependent
// components (e.g. the custom Cursor) actually mount their behaviour instead of
// bailing out early — that's where runtime bugs hide.
beforeEach(() => {
  window.matchMedia = ((query: string) => ({
    matches: query.includes('fine'),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

// Record any error the app throws while mounted or while handling a DOM event.
// jsdom reports uncaught listener exceptions as a window 'error' event, so this
// turns "TypeError: x is not a function during a mousemove" into a failing test
// instead of a silent console message.
const uncaughtErrors: string[] = [];
const onError = (e: ErrorEvent) => uncaughtErrors.push(e.message);

beforeEach(() => {
  uncaughtErrors.length = 0;
  window.addEventListener('error', onError);
});

afterEach(() => {
  window.removeEventListener('error', onError);
  cleanup();
  expect(uncaughtErrors, 'uncaught runtime error(s) during test').toEqual([]);
});
