import Image from "next/image"
import Link from "next/link";
import "../src/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-blue-900 p-8 mt-6 my-6 rounded-md">
      <Image src="/logo.png" width={100} height={40} className="mx-auto" alt={"logo"}/>
      <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4">Blog</h1>
        </Link>
      <p className="text-slate-300">Welcome to My blog</p>
    </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-12 py-6 text-center text-slate-400">
      <h3>Developed by Cicrano</h3>
    </div>
    </footer>
  );



  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
