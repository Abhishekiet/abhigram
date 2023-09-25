import { Post } from "@/app/Models/post"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET=async( req, {params} )=>{
    
    await mongoose.connect( process.env.MongoDbURL )
    const data = await Post.find( { email : params.id } )

    return NextResponse.json( data )
}