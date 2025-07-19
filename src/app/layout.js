import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";

export const metadata = {
  title: "My Berita Olahraga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}