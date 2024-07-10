import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-between mb-6">{children}</div>;
}
