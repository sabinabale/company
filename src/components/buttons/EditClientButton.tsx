import Image from "next/image";
import React from "react";
import edit from "/public/edit.svg";

export default function EditClientButton() {
  return (
    <button className="[ flex items-center gap-1 ] [ btn--secondary btn--padding font-medium custom-border ]">
      Edit company details
    </button>
  );
}
