import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Company</h1>
      <form className="mt-4 flex flex-col">
        <h2>Log into your account</h2>
        <p>Welcome back! Please enter your details.</p>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="name@email.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Super secret password"
        />
        <div className="flex gap-4 mt-2">
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <Button variant="secondary" type="submit">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
