import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.NEXT_GITHUB_CLIENT_ID!,
			clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRETS!,
		}),
	],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
