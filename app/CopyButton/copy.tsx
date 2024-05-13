"use client"
import copy from "clipboard-copy"
import { useState } from "react"


const Copy = ({text}:any) => {
    const [iscopied, setIscopied] = useState(false)

    const handleCopyClick = async ()=>{ 
        try{  
            await copy(text);
            setIscopied(true);
        }catch(error){
            console.error("fail to copy text to clipboard ", error)
        }
    }

    return(
        <div  className="" >
            <  button className="bg-blue-900 text-white rounded-full p-2 m-4" onClick={handleCopyClick} >{iscopied? "copied":"copy the address "}</button>
        </div>
    )
}

export default Copy