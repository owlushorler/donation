"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/lop.jpg"

const BtcNav = () => {
    const [nav , setnav] = useState(false)

    return(

        <div>
            

       <div className="bg-red-900 text-white  h-28 flex flex-row justify-between px-5 items-center " >
            
            <Image className="h-24 w-24 rounded-full" src={logo}  alt="logo" />
            

                <nav className="md:flex  flex-row justify-start gap-4 shrink-0 " >
             <Link href="/"> <nav   ><a >HOME</a></nav></Link>
               {/*  <Link href="#needy"> <nav   ><a >NEEDY</a></nav></Link>
            
               <Link href="#achh">  <nav   ><a > ACHIEVMENT</a></nav></Link>
               <Link href="#sub"> <nav   ><a > SUBSCRIBE</a></nav></Link>
                
        
                <nav  ><nav  ><select className="bg-blue-900  cursor-pointer  " >
                    <option>GET INVOLVE</option>
                    
                    <option> <Link href="#giftcard" > BUY A GIFT CARD </Link></option>

                    <option> <Link href="#btc" >SEND BITCOIN  </Link> </option> 
    </select></nav></nav>
                <Link href="#contact"> <nav   ><a >CONTACT US</a></nav></Link>*/}
      
                

                </nav>
                
                
                 

       </div> 
       <div id="#home">
       </div>
       <div className="  " >  
       
       {/* {nav &&  <nav className="  md:hidden px-4 text-white flex flex-col item bg-blue-900 gap-4 shrink-0 " >
       <Link href="/"> <nav   ><a >HOME</a></nav></Link>
               <Link href="#needy"> <nav   ><a >NEEDY</a></nav></Link>
            
              <Link href="#achh"> <nav   ><a > ACHIEVMENT</a></nav></Link>
               <Link href="#sub"> <nav   ><a > SUBSCRIBE</a></nav></Link>
                
        
                <nav  ><nav  ><select className="bg-blue-900  cursor-pointer  " >
                    <option>GET INVOLVE</option>
                    
                    <option> <Link href="#giftcard" > BUY A GIFT CARD </Link></option>

                    <option> <Link href="#btc" >SEND BITCOIN  </Link> </option> 
    </select></nav></nav>
                <Link href="#contact"> <nav   ><a >CONTACT US</a></nav></Link>
               

        </nav>}*/}
        </div>
       
       </div>
    )
}

export default BtcNav