import Nabvar from "@/components/Nabvar";
import "./globals.css";
import { inter } from "@/utils/fonts";
import Footer from "@/components/Footer";
import ReactTanStackQueryProvider from "@/utils/ReactTanStackQueryProvider";

export const metadata = {
  title: "Re-zanCharity | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactTanStackQueryProvider>
          {/* nabvar */}
          <Nabvar></Nabvar>

          {/* data */}
          {children}

          {/* footer */}
          <Footer></Footer>
        </ReactTanStackQueryProvider>
      </body>
    </html>
  );
}
