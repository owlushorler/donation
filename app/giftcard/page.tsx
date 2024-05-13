import { Copy } from "../CopyButton"
import btc1 from "../images/btc1.jpg"
import Image from "next/image"
import { Footer } from "../components"
import BtcNav from "../btc/btcnav"

const Btc = () => {

    const address = "gabs84787.gmail.com"
    return(
        <div>
            <BtcNav/>
        <div className="flex flex-col items-center align-middle justify-center text-center" >
            <div className="text-3xl text-blue-900 m-7 md:text-6xl" >GIFTCARD</div>

            <div className="bg-red-900 text-white p-3 m-3 md:text-3xl" >copy the mail address below to forward the code of the giftcards   </div>
            
            <p className="  p-3 m-3 border md:text-3xl" >{address}</p>

            <Copy text={address}/>

            <a href="https://www.carddelivery.com" > <div className= "bg-red-900 text-white p-3 m-3 md:text-3xl" >click to purchase giftcard  online</div></a>

            < p  className="text-red-900" >copy the mail address then paste it at the mail to deliver when purchasing the giftcards online </p>
           

        </div>
            <Footer/>
        </div>
    )
}

export default Btc