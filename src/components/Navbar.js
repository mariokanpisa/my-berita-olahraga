export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">My Berita Olahraga</h1>
      <ul className="flex gap-4">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/berita" className="hover:text-white">Berita</a></li>
        <li><a href="/jadwal" className="hover:text-white">Jadwal</a></li>
      </ul>
    </nav>
  );
}