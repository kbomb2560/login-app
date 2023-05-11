'use client';
import { SessionProvider } from 'next-auth/react';
export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
