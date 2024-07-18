// @ts-nocheck
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import alertIconRegular from "/public/alertIconRegular.svg";
import basketIcon from "/public/basketIcon.svg";
import buildingsIcon from "/public/buildingsIcon.svg";
import logoutIcon from "/public/logoutIcon.svg";

export default function TopNav() {
  return (
    <nav className="[ h-auto w-full ] [ py-3 px-6 ] [ border-b border-zinc-200 ]">
      <div className="flex items-center">
        <CompanyLogo />
        <NavLinks />
      </div>
    </nav>
  );
}

function CompanyLogo() {
  return <div className="[ font-bold text-xl pr-6 ]">Company</div>;
}

function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    {
      svg: (
        <Image
          width={16}
          height={17}
          src={buildingsIcon.src}
          alt="buildingsIcon"
        />
      ),
      text: "Clients",
      href: "/clients",
    },
    {
      svg: (
        <Image
          width={17}
          height={17}
          src={alertIconRegular.src}
          alt="Alert icon"
        />
      ),
      text: "Duty log",
      href: "/dutylog",
    },

    {
      svg: (
        <Image width={17} height={17} src={basketIcon.src} alt="basketIcon" />
      ),
      text: "Orders",
      href: "/orders",
    },
  ];

  return (
    <div className="flex gap-2">
      {navLinks.map((link) => (
        <a
          href={link.href}
          key={link.text}
          className={`[ flex ] [ btn--padding font-medium ] [ custom-border ] ${
            pathname.includes(link.href)
              ? "bg-zinc-200 opacity-100"
              : "opacity-70 hover:opacity-100 hover:bg-zinc-200"
          }`}
        >
          <div className="[ flex items-center gap-[7px] ]">
            <span>{link.svg}</span>
            <span>{link.text}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
