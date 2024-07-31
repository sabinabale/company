"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import alertIconRegular from "/public/alertIconRegular.svg";
import basketIcon from "/public/basketIcon.svg";
import buildingsIcon from "/public/buildingsIcon.svg";

export default function NavLinks() {
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
