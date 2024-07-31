import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import loginpic from "/public/login.png";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[22px] font-bold mb-5">Company</h1>
      <form className="relative flex flex-col w-[360px] h-auto border rounded-[15px] p-5 bg-white">
        <Image
          src={loginpic.src}
          width={360}
          height={92}
          alt="login backgroubd picture"
          className="absolute top-0 left-0"
        ></Image>
        <h4 className="text-center mt-[34px]">Log into your account</h4>
        <p className=" text-zinc-500 text-center mb-11 mt-2">
          Welcome back! Please enter your details.
        </p>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
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
          <Button variant="primary" type="submit" className="w-full">
            <Link className="outline-none" href="/app/clients">
              Log in
            </Link>
          </Button>
        </div>
      </form>
      <small className="mt-4 text-zinc-400">
        All rights reserved © {new Date().getFullYear()}
      </small>
    </div>
  );
}
