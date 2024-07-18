import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1070px] mx-auto container_inner px-4">
      {children}
    </div>
  );
}
