export default function JadwalUpdate() {
  const jadwal = [
    { tanggal: "20 Juli 2025", pertandingan: "Barcelona vs Real Madrid" },
    { tanggal: "21 Juli 2025", pertandingan: "Arsenal vs Liverpool" },
    { tanggal: "22 Juli 2025", pertandingan: "Juventus vs AC Milan" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Jadwal Pertandingan</h1>
      <ul className="space-y-4">
        {jadwal.map((item, index) => (
          <li key={index} className="p-4 bg-neutral-900 rounded-lg">
            <p className="font-semibold">{item.tanggal}</p>
            <p className="text-gray-400">{item.pertandingan}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}