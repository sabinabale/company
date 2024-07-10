import React from "react";

export default function ListHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h6 className="py-4 px-5">{children}</h6>;
}
