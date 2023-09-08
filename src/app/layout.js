import Nabvar from "@/components/Nabvar";
import "./globals.css";
import { inter } from "@/utils/fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Re-zanCharity | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nabvar></Nabvar>

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
