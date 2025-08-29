"use client";
import { useState } from "react";

type ServerData = {
  message: string;
  time: string;
};

type ApiResponse = {
  message: string;
  time: string;
};

type ApiError = {
  error: string;
};

type ApiData = ApiResponse | ApiError;

export default function DataButtons({ serverData }: { serverData: ServerData }) {
  const [showServer, setShowServer] = useState(false);
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    setLoading(true);
    setApiData(null);
    try {
      const res = await fetch('/api/data');
      const json = await res.json() as ApiResponse;
      setApiData(json);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setApiData({ error: errorMessage });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <button
          onClick={() => setShowServer(s => !s)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          {showServer ? 'Sembunyikan data dari server' : 'Tampilkan data dari server'}
        </button>
        {showServer && (
          <pre className="mt-2 p-3 rounded text-white bg-primary/50">
            {JSON.stringify(serverData, null, 2)}
          </pre>
        )}
      </div>

      <div>
        <button
          onClick={fetchApi}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Memuat...' : 'Fetch data dari API'}
        </button>
        {apiData && (
          <pre className="mt-2 p-3 rounded text-black bg-primary">
            {JSON.stringify(apiData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
