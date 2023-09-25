import mongoose from "mongoose"

const PostSchema = mongoose.Schema({
    title : String,
    desc : String,
    image : String,
    email : String,
    name : String,
    userImage : String
})

export const Post = mongoose.models.posts || mongoose.model( "posts", PostSchema )