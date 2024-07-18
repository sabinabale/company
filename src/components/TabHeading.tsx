import React from "react";

type TabHeadingProps = {
  children?: React.ReactNode;
};

export default function TabHeading({ children }: TabHeadingProps) {
  return <h1 className="text-3xl font-bold">{children}</h1>;
}
