"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Signup() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success,", response.data);
            toast.success("Signup Succesfully!");
            router.push("/profile")
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4">
                <h1 className="text-center text-white text-2xl font-semibold mb-2">
                    {loading ? "Processing..." : "Signup"}
                </h1>

                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-gray-300 text-sm">
                        Username
                    </label>
                    <input
                        className="border border-gray-600 bg-gray-700 text-white rounded-lg p-2.5 outline-none focus:border-blue-500 transition-colors"
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="Enter your username"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-300 text-sm">
                        Email
                    </label>
                    <input
                        className="border border-gray-600 bg-gray-700 text-white rounded-lg p-2.5 outline-none focus:border-blue-500 transition-colors"
                        type="text"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-gray-300 text-sm">
                        Password
                    </label>
                    <input
                        className="border border-gray-600 bg-gray-700 text-white rounded-lg p-2.5 outline-none focus:border-blue-500 transition-colors"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    onClick={onSignup}
                    disabled={buttonDisabled}
                    className="mt-2 p-2.5 rounded-lg bg-blue-600 text-white font-medium
                    hover:bg-blue-700 transition-colors
                    disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                   Signup
                </button>

                <Link
                    href="/login"
                    className="text-center text-sm text-blue-400 hover:text-blue-300 hover:underline mt-1"
                >
                    Visit Login
                </Link>
            </div>
        </div>
    )
}