export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-4">Kategori</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Sepak Bola</a></li>
        <li><a href="#" className="hover:underline">Basket</a></li>
        <li><a href="#" className="hover:underline">MotoGP</a></li>
        <li><a href="#" className="hover:underline">F1</a></li>
      </ul>
    </aside>
  );
}