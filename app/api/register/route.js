import mongoose from "mongoose";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectDB();
    const { name, email, password } = await req.json();
    try {
        await new User({
            name, email, password: await bcrypt.hash(password, 10)
        }).save()
        console.log("User Created Successfully")
        return NextResponse.json({ success: "Successfully created" })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}