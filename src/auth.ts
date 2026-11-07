/* eslint-disable @typescript-eslint/no-unused-expressions */
import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",

  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const payload = await response.json();
        if (payload.message == "success") {
          const decoded: { id: string } = jwtDecode(payload.token);
          return {
            id: decoded.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          0
          throw new Error(payload.message || "wrong");
        }
      },
    }),
  ],

  callbacks:{
     async jwt({ token, user, }) {
      if(user){
        token.user = user.user,
        token.token = user.token
      }
      return token;
    },
     async session({ session, token }) {
      session.user = token.user
      return session
    },

  }
};
