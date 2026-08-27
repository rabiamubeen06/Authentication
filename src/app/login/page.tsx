"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success,", response.data);
            toast.success("Login successful");
            router.push("/profile");
        } catch (err: any) {
            console.log("Login failed", err);
            toast.error(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4">
                <h1 className="text-center text-white text-2xl font-semibold mb-2">
                    {loading ? "Processing..." : "Login"}
                </h1>

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
                    onClick={onLogin}
                    disabled={buttonDisabled}
                    className="mt-2 p-2.5 rounded-lg bg-blue-600 text-white font-medium
                    hover:bg-blue-700 transition-colors
                    disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Login
                </button>

                <Link
                    href="/signup"
                    className="text-center text-sm text-blue-400 hover:text-blue-300 hover:underline mt-1"
                >
                    Visit Signup
                </Link>
            </div>
        </div>
    )
}