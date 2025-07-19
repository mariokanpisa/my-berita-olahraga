import Link from "next/link";

export default function NewsCard({ title, excerpt, slug }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg">
        <Link href={`/berita/${slug}`}>{title}</Link>
      </h2>
      <p className="text-sm text-gray-600">{excerpt}</p>
    </div>
  );
}
