import Image from "next/image"
import gift from "../images/giftcard2.jpg"
import gif from "../images/btc2.jpg"
import Link from "next/link"

const Nav4 = () =>{
    return(
        <div id="donate" >
            <div className="text-5xl text-center p-11 bg-red-900 text-white" >DONATION</div>

            <div  className=" flex flex-col  justify-center items-center lg:flex lg:flex-row" >
                <nav id="giftcard" className="m-4" >
                    <div className="flex relative">
                    <Image src={gift} alt="giftcard" />
                    <div className=" absolute bottom-16 left-11">
                   <h1 className=" text-blue-900 text-3xl md:text-5xl md:m-5" > Buy a Gift Card</h1>
                   <h2 className="text-xl  text-black md:text-3xl md:m-5" >Give the gift of Giving With  a gift Card</h2>

                   <Link href="/giftcard" > <button  className="bg-blue-700 m-2 p-3 text-white rounded" >Donate a giftcard</button> </Link>
                   </div>
                   </div>
                </nav>

                <nav>
                <div id="btc" className="flex relative m-4">
                    <Image src={gif} alt="giftcard" />
                    <div className=" absolute bottom-16 left-11">
                   <h1 className=" text-blue-900 m-2 text-4xl md:text-5xl md:m-5 " > Send bitcoin</h1>
                   <h2 className="text-2xl   text-black md:text-3xl md:m-5" >Send bitcoin to safe a life</h2>

                  <Link href="/btc" > <button  className="bg-blue-700 m-2 p-3 text-white rounded" >Donate a bitcoin</button> </Link>
                   </div>
                   </div>

                </nav>
            </div>
            
        </div>
    )

}

export default Nav4