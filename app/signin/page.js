'use client'

import Image from "next/image"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { FaSpinner } from "react-icons/fa6";


const SignInPage=()=>{

    const session = useSession()
    const router = useRouter()

    if( session.status === 'unauthenticated' ){
    return(
        <div className="flex justify-center h-[85vh] p-4 bg-gray-200">
            <div className="">
                <h1 className="font-bold text-3xl mt-[70%]"> SignIn To Explore ... </h1>
                
                <span className="flex bg-[blue] p-4 items-center mt-16 " onClick={ ()=> signIn('google') }>
                    <Image src='/google.png' alt='google' height={50} width={50}/> 
                    <h1 className="text-2xl font-bold text-white"> SignIn with Google </h1>
                </span>
            
            </div>
        </div>
    )
    }

    if( session.status === 'loading' ){
        return(
        <div className="flex w-full h-[85vh] justify-center items-center animate-spin" > <FaSpinner size={100}/> </div>
        )
    }

    else{ router.push("/") }
}

export default SignInPage