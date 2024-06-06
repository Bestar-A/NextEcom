'use client';
import TopNav from "@/components/TopNav";
import "./globals.css";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className="vh-100 d-flex flex-column">
          <TopNav />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
