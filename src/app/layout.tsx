import type { Metadata } from "next";
import Link from "next/link";
import "./style.css";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "LeonidM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <div className="container header-container">
          <Link href={"/"} legacyBehavior>
            <Button>About me</Button>
          </Link>
          <Link href={"/comic"} legacyBehavior>
            <Button>XKCD</Button>
          </Link>
        </div>

        {children}

        {/* Footer */}
        <div className="container footer-container">
          <a>By LeonidM</a>
        </div>
      </body>
    </html>
  );
}
