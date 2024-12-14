import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

export const metadata: Metadata = {
  title: "Gler",
  description: "Cleaning Service on demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
