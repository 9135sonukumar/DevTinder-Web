import React from "react";

interface LoaderProps {
  size?: "loading-sm" | "loading-md" | "loading-lg";
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "loading-md",
  color,
  className,
}) => {
  return (
    <span
      className={`loading loading-spinner ${size} bg-[${color}] ${className}`}
    ></span>
  );
};

export default Loader;
