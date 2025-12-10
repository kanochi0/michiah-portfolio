import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Michiah Lee | Virtual Assistant",
  description: "Virtual assistant for entrepreneurs and content creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <div className="nav-inner">
              <Link href="/" className="logo">
                Michiah Lee
              </Link>

              <nav className="nav-links">
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Book Consultation</Link>
              </nav>
            </div>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            © {new Date().getFullYear()} Michiah Lee · Virtual Assistant for
            Entrepreneurs & Creators
          </footer>
        </div>
      </body>
    </html>
  );
}
