"use client"
import Image from "next/image"
import l1 from "../images/pexels-emmanuel-ikwuegbu-8948347.jpg"
import l2 from "../images/pexels-rdne-stock-project-6646883.jpg"
import l3 from "../images/pexels-rdne-stock-project-6646886.jpg"
import l4 from "../images/sop.jpg"


const Nav3 = ()=>{
  
    
    return(
        <div id="achh" className="flex flex-col items-center text-center" >
            <div className="text-4xl lg:text-6xl text-red-900" >   ACHIEVMENT</div>
            <div className="text-2xl lg:text-4xl text-blue-800" >your donation goes a long way to safe many life</div>

            <div   className="flex m-3 flex-col md:grid md:grid-cols-2 md:gap-5 md:grid-flow-row lg:flex lg:flex-row" >
                <div>
                    <Image className="h-96 w-96" src={l2} alt="kol"/>
                    <p>giving food to sick childred in Nairobi</p>
                    
                </div>

                <div>

                <Image className="h-96 w-96" src={l1} alt="kol"/>
                    <p>provision of school uniform <br/> for more than 300student in Ogun Nigeria</p>
                    </div>

                    <div>
                    <Image className="h-96 w-96" src={l3} alt="kol"/>
                    <p>providing of aid kits and food to the homeless <br/> for more than 300 people in Ogun Nigeria</p>

                    </div>

                    <div className="">
                    <Image className="h-96 w-96" src={l4} alt="kol"/>
                    <p>providing foods stuff to the community, 300 people in congo</p>
                    

                    </div>

            </div>
        
        </div>
    )
}

export default Nav3