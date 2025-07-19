export default function NewsCard({ title, summary }) {
  return (
    <div className="p-4 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400 mt-2">{summary}</p>
    </div>
  );
}