import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-p-36 scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next 13 Blog</title>
      </head>

      <body className="text-black bg-white">
        <header className="bg-white border-y-2 border-black fixed w-full">
          <nav className="max-w-4xl mx-auto px-5 sm:px-10 flex justify-between">
            <h1 className="flex items-center text-xl sm:text-3xl font-semibold py-5 px-3 sm:p-5 border-x-2 border-black">
              Next 13 Blog
            </h1>
            <Link
              href="/"
              className="flex items-center font-bold py-5 px-3 sm:p-5 border-x-2 border-black hover:bg-neo2 transition-colors"
            >
              Home
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto sm:px-10">
          <div className="px-5 sm:px-10 pt-36 pb-16 min-h-[calc(100vh-68px)] sm:border-x-2 border-black">
            {children}
          </div>
        </main>

        <footer className="bg-white border-y-2 border-black w-full">
          <nav className="max-w-4xl mx-auto px-10 flex justify-center">
            <h1 className="flex items-center p-5">
              <div>
                <span className="font-bold">Next 13 Blog</span> - Luca Sett
              </div>
            </h1>
          </nav>
        </footer>
      </body>
    </html>
  );
}
