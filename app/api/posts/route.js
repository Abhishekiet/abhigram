import { Post } from "@/app/Models/post"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const POST=async( req )=>{
    
    const data = await req.json()
    await mongoose.connect( process.env.MongoDbURL )
    await Post.create( data )

    return NextResponse.json( { send: 'Succesfull' } )
}

export const GET=async( req )=>{
    await mongoose.connect( process.env.MongoDbURL )
    const data = await Post.find()
    
    return NextResponse.json( data )
}