import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Michiah Lee | Virtual Assistant",
  description: "Virtual assistant for entrepreneurs and content creators.",
};

export default function RootLayout({ children }) {
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
            © {new Date().getFullYear()} Michiah Lee · Virtual Assistant for Entrepreneurs & Creators
          </footer>
        </div>
      </body>
    </html>
  );
}
