'use client'

import { Graduate } from "next/font/google";
import Image from "next/image"
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import { useSession } from "next-auth/react";

const Header=()=>{

    const session = useSession()
    
    return(
        <div className="flex justify-between p-4 h-[10vh] bg-[black] sticky items-center">
            <Link href="/addPost"> <MdAddCircleOutline size={35} className="text-white" /> </Link>
            <Link href='/'> <h1 className="text-3xl text-white font-bold" style={{ fontFamily:'cursive' }} > AbhiGram </h1> </Link>
            <Link href={ `/userPage` }> <Image src={ session.status === 'unauthenticated'? '/google.png':session?.data?.user?.image } className="rounded-full" alt='' height={50} width={50} /> </Link>
        </div>
    )
}

export default Header
