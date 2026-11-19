"use server"

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { env } from "process";

export async function getMyToken() {
  const decodedToken = (await cookies()).get("next-auth.session-token")?.value;
  const token = await decode({
    token: decodedToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  return token?.token;
}
