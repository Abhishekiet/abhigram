'use client'

import PostCard from "@/app/components/PordCard"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa6";
import { useSession } from "next-auth/react"


const page=( {params} )=>{

    const [ array, setArray ] = useState( [] )
    const [ first, setFirst ] = useState({})

    useEffect( ()=>{
        const fetchData=async()=>{
            const res = await axios.get( `/api/posts/${params.id}` )
            setArray( res.data )
            setFirst( res.data[1] )
        }
        fetchData()
    },[] )

    return(
        <div className="flex flex-col pt-4 w-full bg-gray-200 h-[85vh] overflow-scroll ">
            
            <div className="flex flex-col items-center w-full p-4 h-[20vh] md:h-[40vh] bg-gradient-to-r from-blue-100 to-blue-500 via-purple-500">
                <img src={first?.userImage} alt='/vercel.svg' height={100} width={100} className='rounded-full'/>
                <h1 className="mt-5 text-2xl font-bold"> { first?.name } </h1>
            </div>

            
            <h1 className="text-center font-bold text-3xl mt-8 underline"> Shared Posts </h1> 

            <div className="mt-5 p-4 md:w-[50%] mx-auto">
            {
            array.length > 0 ? 
            array?.map( post => <PostCard key={post._id} {...post}/> ) :
            <div className="flex w-full h-[40vh] justify-center items-center animate-spin" > <FaSpinner size={100}/> </div>
            }
            </div>
        
        </div>
    )
}

export default page