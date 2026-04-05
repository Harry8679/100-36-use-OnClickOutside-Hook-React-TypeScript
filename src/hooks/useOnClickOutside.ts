import { useEffect, useRef, RefObject } from 'react';
import { useEscapeKey } from './useEscapeKey';

interface UseOnClickOutsideOptions {
  enabled?: boolean;
}

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null> | RefObject<T | null>[],
  callback: () => void,
  options: UseOnClickOutsideOptions = {}
): void => {
  const { enabled = true } = options;
  const callbackRef = useRef(callback);

  // Update callback ref
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      
      const isOutside = refs.every((r) => {
        return r.current && !r.current.contains(event.target as Node);
      });

      if (isOutside) {
        callbackRef.current();
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, enabled]);

  // Also handle Escape key
  useEscapeKey(callback, enabled);
};