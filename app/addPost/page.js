'use client'

import axios from "axios"
import { useState } from "react"
import { BsFillCloudDownloadFill } from "react-icons/bs";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddPost=()=>{

    const [ title, setTitle ] = useState( '' )
    const [ desc, setDesc ] = useState( '' )
    const [ image, setImage ] = useState( )

    const session = useSession()
    const router = useRouter()

    const add=async()=>{
        const data = new FormData()
        data.append( "file", image )
        data.append("upload_preset", "rqvzyna4")
        
        const res = await axios.post( "https://api.cloudinary.com/v1_1/dest8coln/image/upload", data )
        const posting = await axios.post( '/api/posts', { title,desc, image:res.data.secure_url, email: session.data?.user?.email, name:session?.data?.user?.name, userImage: session?.data?.user?.image } )
        
        if( posting.status === 200 ){
            setTitle('') 
            setDesc('')
            setImage(null)
            router.push("/")
            alert( 'Post added successfully !!! ' )
        }
    }

    return(
        <div className="flex flex-col h-[85vh] bg-gray-200 md:items-center p-4">
                <h1 className="text-2xl font-bold text-center md:mt-8"> Lets feed something awesome today ... </h1>            
                
                <div className=" flex p-4 flex-col h-[60vh] mt-[10%] md:mt-6 md:w-[50%] items-center text-2xl shadow shadow-2xl py-4 bg-white">
                    
                    <div className="flex flex-col w-[90%] ">
                    <h1 className="text-start pl-3" style={{ fontFamily:"cursive" }}> Add Title : </h1>
                    <input type='text' onChange={e=> setTitle(e.target.value)} className="h-6 p-5 mt-3 rounded-3xl bg-gray-200" placeholder="Add Title here..."/>
                    </div>

                    <div className="flex flex-col w-[90%]">
                    <h1 className="text-start mt-[5%] pl-3" style={{ fontFamily:"cursive" }}> Add Description : </h1>
                    <input type='text' onChange={e=> setDesc(e.target.value)} className="h-28 p-5 mt-3 rounded-3xl md:h-20 bg-gray-200" placeholder="Add Post Description here..."/>
                    </div>

                    <div className="flex width-full justify-between">
                    <input type='file' className="w-[20%] hidden" id='qwert' onChange={ e=> setImage( e.target.files[0] ) }/> 
                    
                    {
                        image ? <div className="mt-[15%]"> <h1 className="text-center text-blue-700 text-xl font-bold"> Image Selected !!! Proceed to post </h1> </div> :
                    
                    <label className="text-start mt-[15%] flex flex-col justify-center items-center " style={{ fontFamily:"cursive" }} htmlFor='qwert'> 
                       <BsFillCloudDownloadFill size={35} className="text-center text-blue-700"/>
                       <h1 className="mt-4"> Choose Image </h1>
                    </label>
                    }
                    </div>

                </div>

                <div className="flex justify-center mt-6">
                    {
                        title && image && desc ?
                        <button className="bg-[green] p-4 mt-[5%] text-white rounded-full font-bold" onClick={add}> Share Post </button> :
                        <button className="bg-[gray] p-4  rounded-full font-bold"> Share Post </button>
                    }
                </div>
        </div>
        
    )
}

export default AddPost

{/* <input  type ='text' onChange={ (e)=> setTitle( e.target.value )  } value={ title } />
<input type='file' onChange={ e=> setImage( e.target.files[0] ) }  />
<button onClick={add}> Add Post </button> */}
