 import Image from "next/image"
 import lop from "../images/images (1).jpg"
 import lopp from "../images/games.jpg"
 import lopp1 from "../images/poverty.jpg"
 import lopp2 from "../images/edu.jpg"
 import s from "../images/sam1.jpg"
 import s2 from "../images/sam2.jpg"
 import s3 from "../images/sam3.jpg"
 import s4 from "../images/sam4.jpg"
 import s5 from "../images/sam5.jpg"
 import s6 from "../images/samp 8.jpg"
 import s7 from "../images/sam7.jpg"
 import s8 from "../images/sam8.jpg"
 import Link from "next/link"
 
 const Nav2=()=>{
    const data = [{
        id:1,
        img:lop,
        h1:"HUNGER",
        h2:" HELP TO CURE HUNGER IN THE LAND"
    },
    {
        id:2,
        img:lopp,
        h1:"ORPHANS",
        h2:"YOUR SUPPORT CAN HELP A KID"
    },

    {
        id:3,
        img:lopp1,
        h1:"POVERTY",
        h2:"HELP TO SAFE A KID FROM POVERTY"
    },

    {
        id:4,
        img:lopp2,
        h1:"EDUCATION",
        h2:"HELP TO PROVIDE EDUCATION FOR A KID FOR BETTER FUTURE"
    }
    ,
    {
        id:5,
        img:s,
        h1:"HOMELESS",
        h2:"HELP TO PROVIDE HOME FOR THIS KIDS"
    }
    ,
    {
        id:6,
        img:s2,
        h1:"BAD ENVIRONMENT",
        h2:"HELP TO PROVIDE SAFE ENVIRONMENT THAT WILL SAFE TO LIVE"
    }
    ,
    {
        id:7,
        img:s3,
        h1:"SICKENESS",
        h2:"HELP TO TO BUILD GOOD HOSPISTAL THAT CAN HELP TO THREAT THE SICK ONCE"
    }
    ,
    {
        id:8,
        img:s4,
        h1:"BAD WATER",
        h2:"HELP TO PROVIDE CLEAN AND SAFE WATER TO DRING"
    }
    ,
    {
        id:9,
        img:s5,
        h1:"UNHEALTHY FAMILY",
        h2:"KINDLY HELP TO PROVIDE SUPPORT FOR FAMILIES IN AFRICA"
    }
    ,
    { id:10,
        img:s6,
        h1:"ORPHANS",
        h2:"THIS KIDS NEED YOUR HELP "
    }
    ,
  
]

    return(
               
        <div id="needy" >
            <div className="bg-red-900 text-center lg:text-3xl text-white text-xl m-5" >
                AFRICANS NEED YOUR HELP PLEASE SUPPORT
            </div>

        <div className="m-10 flex flex-col md:grid md:grid-cols-2 md:grid-flow-row  items-center justify-center gap-6 ">
          {data.map((item)=>  <div key={item.id} className="flex flex-col bg-red-900 text-center p-5 items-center" >
                
                <Image className=" h-48 w-96" src={item.img} alt="poverty"/>
                <p className="text-2xl text-blue-900"  >{item.h1}</p>
                <p className="text-xl text-white" >{item.h2}</p>
                
               <Link href="#donate" ><button className="bg-blue-800 text-white rounded p-2 cursor-pointer hover:text-black hover:bg-blue-gray-500 " >DONATE</button></Link> 
            </div>)}


            
        
        </div>
        </div>
    )
}

export default Nav2