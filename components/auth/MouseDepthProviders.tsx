'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type MousePosition = {
  x: number;
  y: number;
};

const MouseContext = createContext<MousePosition>({
  x: 0,
  y: 0,
});

export function MouseDepthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  );
}

export function useMouseDepth() {
  return useContext(MouseContext);
}
