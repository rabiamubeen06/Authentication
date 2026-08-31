import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
interface Token{
    id:string,
    username:string,
    email:string,
}
export const getDataFromToken=(request:NextRequest)=>{
    try {
        const token=request.cookies.get("token")?.value||'';
       const decoded=jwt.verify(token,process.env.TOKEN_SECRET!) as Token;
       return decoded.id;
    } catch (error:any) {
        throw new Error(error.message);
    }
}