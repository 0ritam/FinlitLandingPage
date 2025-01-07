"use client";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        "--border-size": `${borderSize}px`,
        "--border-radius": `${borderRadius}px`,
        "--neon-first-color": neonColors.firstColor,
        "--neon-second-color": neonColors.secondColor,
        "--after-blur": `${dimensions.width / 3}px`,
      }}
      className={cn(
        "relative rounded-[var(--border-radius)] p-6 md:p-10 lg:p-12 bg-transparent",
        "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
        "before:h-full before:w-full before:rounded-[var(--border-radius)] before:content-['']",
        "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
        "before:animate-background-position-spin",
        "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
        "after:h-full after:w-full after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
        "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
        "after:animate-background-position-spin",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-[calc(var(--border-radius)-var(--border-size))] bg-n-8 dark:bg-n-8",
          "p-6 md:p-10 lg:p-12"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
