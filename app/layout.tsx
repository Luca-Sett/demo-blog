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
        <title>Next 13 Blog</title>
      </head>

      <body className="text-zinc-900 bg-zinc-50">
        <header className=" bg-zinc-900 text-zinc-50 fixed w-full">
          <nav className="max-w-4xl mx-auto px-10 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Next 13 Blog</h1>
            <Link href="/" className="font-medium">
              Home
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-10 pt-36 pb-20">{children}</main>
      </body>
    </html>
  );
}
