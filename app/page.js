'use client'

import { useEffect, useState } from "react"
import PostCard from "./components/PordCard"
import axios from "axios" 

import { FaSpinner } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const App=()=>{

  const [ array, setArray ] = useState( [] )

  const session = useSession()
  const router = useRouter()

  useEffect( ()=>{
    const fetchData=async()=>{
      const res = await axios.get( '/api/posts' )
      setArray( res.data )
    }
    fetchData()
  },[] )

  if( session.status === 'unauthenticated' ){ router.push("/signin") }

  else{
  return(
    <div className="flex flex-col items-center justify-center p-2 bg-gray-200">
       
      <div className=" h-[85vh] md:w-[50%] overflow-scroll" >
      
      {
        array.length > 0 ? 
        array?.map( post => <PostCard key={post._id} {...post}/> ) :
        <div className="flex w-full h-[90vh] justify-center items-center animate-spin" > <FaSpinner size={100}/> </div>
      }
      
      </div>

    </div>
  )}
}

export default App