import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl text-white/70 mb-6">This page could not be found.</p>
        <Link
          href="/"
          className="inline-block bg-[#1526b4] text-white px-6 py-3 rounded-full hover:bg-[#1526b4]/90 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

