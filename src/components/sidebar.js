export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white p-4 w-full md:w-64 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Kategori Berita</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">Liga Inggris</a></li>
        <li><a href="#" className="hover:text-gray-400">Liga Spanyol</a></li>
        <li><a href="#" className="hover:text-gray-400">Liga Italia</a></li>
        <li><a href="#" className="hover:text-gray-400">Tim Nasional</a></li>
        <li><a href="#" className="hover:text-gray-400">Transfer Pemain</a></li>
      </ul>
    </aside>
  );
}