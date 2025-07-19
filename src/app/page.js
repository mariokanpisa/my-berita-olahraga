import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Berita Olahraga Terbaru</h1>

        <NewsCard
          title="Argentina Juara Copa America!"
          excerpt="Messi membawa Argentina kembali juara tahun ini."
          slug="argentina-juara"
        />

        <NewsCard
          title="Mbappe Resmi ke Madrid!"
          excerpt="Transfer selesai, Mbappe kini pemain Madrid."
          slug="mbappe-madrid"
        />
      </main>
      <Footer />
    </>
  );
}
