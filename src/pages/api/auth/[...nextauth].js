import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        //const { username, password } = credentials;
        //const baseUrl = `https://academic.pcru.ac.th/api-apps-sgms/login`;
        //const user = await fetch(`${baseUrl}/login`, { username, password });
        //console.log(username, password);
        const res = await fetch(
          `https://academic.pcru.ac.th/api-apps-sgms/login`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const data = await res.json();

        if (!data.user) {
          throw new Error('Invalid user!!');
        }

        if (data.status == 'ok') {
          //const user = data.user;
          return data.user;
          //return data.user;
        }
        //console.log('>>>', data.user);
        //return data.user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.FULL_NAME = user.FULL_NAME;
      }
      return token;
      //console.log('>>>', token, ' usr ', user);
    },
    async session({ session, token }) {
      //console.log('session', session);
      if (token && session.user) {
        session.user.FULL_NAME = token.FULL_NAME;
      }
      console.log('session', session);
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});
