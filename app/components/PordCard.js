import Image from "next/image"
import Link from "next/link"

const PostCard=( { title,name, desc, image, email, userImage } )=>{
    
    return(
        <div className="flex flex-col border shadow shadow-xl w-full p-3 my-4 bg-white">
            
            <Link href={`user/${email}`}>
            <div className="flex justify-start gap-2 items-center">
                <img src={userImage } alt='/vercel.svg' height={50} width={50} className="rounded-full" />
                <h1 className="text-xl font-bold"> {name} </h1>
            </div>
            </Link>

            <h1 className="text-center text-3xl font-bold text-center mt-5"> { title } </h1>

            <div className="flex justify-center mt-5">
                <Image src={image} alt='/vercel.svg' height={200} width={500}  />
            </div>

            <div className="flex justify-start mt-3 text-xl pl-2">
                <p className=''> {desc} </p>
            </div>
        
        </div>
    )
}

export default PostCard