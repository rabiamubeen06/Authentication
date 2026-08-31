"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
export default function ProfilePage(){
    const router=useRouter();
    const [data,setData]=useState("nothing");
const logout=async()=>{
    try {
        const response=await axios.get("/api/users/logout");
        toast.success("Logout Successful");
        router.push("/login")
        
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message);
    }
}
const getUserDetails=async()=>{
    const res=await axios.get("/api/users/me");
    setData(res.data.data._id);
    
}


    return (
        <div className="flex flex-col items-center *:justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <h2>{data==='nothing'?"Nothing":
                <Link href={`/profile/${data}`}>{data}</Link>
                }</h2>
            <button>Logout</button>
            <button onClick={getUserDetails}>
                GetUserDetails
            </button>

        </div>
    )
}