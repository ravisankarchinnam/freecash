import { useRef, useEffect } from "react";

export default function useDrawerOutsideClick(open: boolean, onClick: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(event?.target as Node)) {
        if(open && typeof onClick === "function") {
          onClick()
        }
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [onClick, open]);

  return { ref };
}
