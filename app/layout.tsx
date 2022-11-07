import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Luca's Blog</title>
      </head>

      <body className="bg-gray-900 text-gray-100">
        <header className="px-12 py-6 bg-gray-800 flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Demo Next.js Blog</h1>
        </header>

        <main className="px-12 py-6">{children}</main>
      </body>
    </html>
  );
}
