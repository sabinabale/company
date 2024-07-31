import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import loginpic from "/public/login.png";

export default function Page() {
  return (
    <>
      <h1 className="text-[22px] font-bold mb-5">
        Company
        <span className="w-2 h-2 bg-amber-400 rounded-full ml-1 border-[2px] border-black/5"></span>
      </h1>
      <form className="relative flex flex-col w-[360px] h-auto border rounded-[15px] p-5 bg-white">
        <Image
          src={loginpic.src}
          width={360}
          height={92}
          alt="login backgroubd picture"
          className="absolute top-0 left-0"
          priority={true}
        ></Image>
        <h4 className="text-center mt-[34px]">Log into your account</h4>
        <p className=" text-[#78716C] text-center mb-11 mt-2">
          Welcome back! Please enter your details.
        </p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
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
      <small className="mt-4 text-[#A8A29D]">
        All rights reserved © {new Date().getFullYear()}
      </small>
    </>
  );
}
