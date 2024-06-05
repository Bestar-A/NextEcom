import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
    connectDB()
    return NextResponse.json({time: new Date().toLocaleString()})
}