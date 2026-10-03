import { useSyncExternalStore } from 'react';

const query = '(max-width: 767px)';
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};
const getSnapshot = () => window.matchMedia(query).matches;

// Subscribe to breakpoint changes, not every mobile browser toolbar resize.
export function useOrtoMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
