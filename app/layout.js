import TopNav from "@/components/TopNav";
import "./globals.css";
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Nextecom",
  description: "Ecommerce based on NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="vh-100 d-flex flex-column">
        <TopNav />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
