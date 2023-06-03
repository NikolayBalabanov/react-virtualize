import { useEffect, useRef } from 'react';

type TUseObserver = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
) => void;

export const useObserver: TUseObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    if (ref?.current) {
      observer.current.observe(ref.current);
    }
  }, [callback, canLoad, isLoading, ref]);
};
