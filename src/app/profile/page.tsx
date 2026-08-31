
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");

      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Your Profile
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Manage your account and view your details
          </p>
        </div>

        {/* User Details */}
        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 mb-6">
          <p className="text-gray-400 text-sm mb-2">
            User ID
          </p>

          {data === "nothing" ? (
            <p className="text-gray-500">
              No user details loaded yet.
            </p>
          ) : (
            <Link
              href={`/profile/${data}`}
              className="text-blue-400 hover:text-blue-300 hover:underline break-all transition-colors"
            >
              {data}
            </Link>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={getUserDetails}
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 transition-colors"
          >
            Get User Details
          </button>

          <button
            onClick={logout}
            className="w-full rounded-lg border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-medium py-2.5 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
