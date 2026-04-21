"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-white/70 mb-6">{error.message || "An unexpected error occurred"}</p>
        <button
          onClick={reset}
          className="bg-[#1526b4] text-white px-6 py-3 rounded-full hover:bg-[#1526b4]/90 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

