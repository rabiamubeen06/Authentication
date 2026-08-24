"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState } from "react"

export default function Signup(){
    const [user,setUser]=useState({
        email:"",
        password:"",
        username:""
    });
    const onSignup=async()=>{

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">
                Signup
            </h1>
            <label htmlFor="username">Username</label>
            <input className="border border-gray-600 p-4"
            type="text"
            id="username"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            placeholder="Enter your name"             />
             <label htmlFor="username">Email</label>
            <input className="border border-gray-600 p-4"
            type="text"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="Enter your email" />
             <label htmlFor="username">Password</label>
            <input className="border border-gray-600 p-4"
            type="text"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="Enter your name"             />
            <button onClick={onSignup} className="p-2 m-2 border border-b-cyan-800 bg-blue-950 text-amber-100 rounded-lg
            focus:border-white-400  "
            >Signup</button>
            <Link href="/login">Visit Login</Link>




        </div>
    )
}