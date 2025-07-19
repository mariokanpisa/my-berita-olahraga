import NewsCard from "../components/NewsCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <NewsCard title="Argentina Juara Copa America!" summary="Argentina kembali menjuarai Copa America setelah pertandingan sengit." />
        <NewsCard title="Transfer Panas Liga Inggris" summary="Beberapa klub besar melakukan transfer mengejutkan musim ini." />
      </div>
      <Sidebar />
    </div>
  );
}