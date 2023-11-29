import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.clientId as string;
const clientSecret = process.env.clientSecret as string;
const secret = process.env.secret as string;

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}