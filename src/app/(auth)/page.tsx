import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import logindotsTR from "../../../public/logindotsTR.png";
import logindotsBL from "../../../public/logindotsBL.png";

export default function Page() {
  return (
    <>
      <h1 className="text-[22px] font-medium mb-6 tracking-tight">
        Company
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full ml-1 border-[2px] border-black/5"></span>
      </h1>
      <h2 className="text-center font-bold text-[27px]">
        Log into your account
      </h2>
      <p className="text-[#78716C] p13 text-center mb-10 mt-3">
        Welcome back! Please enter your details.
      </p>
      <div className="relative">
        <form className="flex flex-col w-[360px] h-auto border rounded-[15px] px-5 pt-6 pb-5 bg-white z-1">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@company\.com$"
            placeholder="Enter email address"
            className="input"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            className="input"
          />
          <div className="flex gap-4 mt-2">
            <Link className="outline-none w-full" href="/app/clients">
              <Button variant="primary" type="submit" className="w-full">
                Log in
              </Button>
            </Link>
          </div>
        </form>
        <Image
          src={logindotsTR.src}
          width={90}
          height={75}
          alt="decorative dots"
          className="hidden md:block md:absolute -z-10 -top-8 -right-7"
        ></Image>
        <Image
          src={logindotsBL.src}
          width={111}
          height={99}
          alt="decorative dots"
          className="hidden md:block md:absolute -z-10 -bottom-10 -left-8"
        ></Image>
      </div>
      <small className="mt-7 text-[#A8A29D]">
        All rights reserved © {new Date().getFullYear()}
      </small>
    </>
  );
}
