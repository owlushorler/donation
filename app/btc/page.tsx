import { Copy } from "../CopyButton"
import btc1 from "../images/btc1.jpg"
import Image from "next/image"
import { Footer } from "../components"
import BtcNav from "./btcnav"

const Btc = () => {

    const address = "1EbLqA5jYzf6KqLS9LUtCEerEUAjs5UYrn"
    return(
        <div>
            <BtcNav/>
        <div className="flex flex-col items-center align-middle justify-center text-center" >
            <div className="text-3xl text-blue-900 m-7 md:text-6xl" >BTC</div>

            <div className="bg-red-900 text-white p-3 m-3 md:text-3xl" >use wthe address bellow to make donation from your wallet </div>
            
            <p className="  p-3 m-3 border md:text-3xl" >{address}</p>

            <Copy text={address}/>

            <div className= "bg-red-900 text-white p-3 m-3 md:text-3xl" >SCAN THE BAR CODE TO MAKE YOUR DONATION</div>

            <Image className=" h-96 w-80" src={btc1} alt="btc" />
           <p className="text-red-900" >only bitcoin can be accepted any other crypto will not get to the recipient</p>

        </div>
            <Footer/>
        </div>
    )
}

export default Btc