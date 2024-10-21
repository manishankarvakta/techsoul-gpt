import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email", placeholder: "Email address" },
        password: { type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {}; // Handle potential undefined case

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || password !== "yourExpectedPassword") { // Replace with actual password verification
          throw new Error("Invalid email or password");
        }
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

// Export the NextAuth handler for GET and POST requests
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
