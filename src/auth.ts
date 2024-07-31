import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const adapter = PrismaAdapter(
  prisma
) as unknown as import("next-auth/adapters").Adapter;

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter,
  session: { strategy: "jwt" },
  providers: [Credentials({})],
});
