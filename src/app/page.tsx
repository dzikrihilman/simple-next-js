import DataButtons from "../components/DataButtons";

type ServerData = {
  message: string;
  time: string;
};

async function getServerData(): Promise<ServerData> {
  return {
    message: "Data yang di-render di server",
    time: new Date().toISOString(),
  };
}

export default async function Page() {
  const serverData = await getServerData();

  return (
    <main className="container max-w-4xl mx-auto p-6 font-sans mt-50">
      <h1 className="text-2xl font-bold">Simple Next.js Demo (App Router)</h1>
      <p className="mt-2">Contoh: satu tombol menampilkan data dari server, satu tombol mem-fetch dari API route.</p>

      <section className="mt-10">
        <DataButtons serverData={serverData} />
      </section>
    </main>
  );
}
