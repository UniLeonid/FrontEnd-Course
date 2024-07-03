import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "LeonidM"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
