import Link from 'next/link'
import "../styles/global.css";
import "./components/navigation"
import { Metadata } from "next";
import Navi from "./components/navigation";

export const metadata: Metadata = {
  title: {
      template: '%s | Next Movies',
      default: 'Next Movies',
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
        <Navi />

        <div>
            {children}
        </div>
    </body>
    </html>
  )
}
