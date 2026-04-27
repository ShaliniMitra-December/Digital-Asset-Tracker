import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Digital Asset Tracker",
  description: "Track and manage digital assets with a clean dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="logo">Digital Asset Tracker</div>
            <nav className="nav-list">
              <Link href="/" className="nav-link">
                Assets
              </Link>
              <Link href="/create" className="nav-link">
                Add Asset
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
