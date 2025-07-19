import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">My Berita Olahraga</h1>
      <ul className="flex gap-4">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
        <li><Link href="/jadwal" className="hover:text-white">Jadwal</Link></li>
      </ul>
    </nav>
  );
}