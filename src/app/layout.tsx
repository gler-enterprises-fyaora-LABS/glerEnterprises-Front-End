import type { Metadata } from "next";

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
      <body className="bg-gray-100 text-gray-800">
      {children}
      </body>
      </html>
  );
}