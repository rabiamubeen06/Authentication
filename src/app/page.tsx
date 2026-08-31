
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-10">
          
          <p className="text-blue-400 text-sm font-medium mb-3">
            Next.js + TypeScript
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Simple Authentication
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            A simple authentication system using{" "}
            <span className="text-white font-medium">JWT</span> in{" "}
            <span className="text-white font-medium">Next.js</span> and{" "}
            <span className="text-white font-medium">TypeScript</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/profile"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Profile
            </Link>
          </div>

        </div>

        <p className="text-gray-600 text-sm mt-6">
          Built for learning authentication with Next.js
        </p>
      </div>
    </main>
  );
}

