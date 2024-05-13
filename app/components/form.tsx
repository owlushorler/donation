const Form = () =>{
    return (
        <div id="sub" className=" flex flex-col lg:flex lg:flex-row justify-around m-9 text-center" >
                <div className="text-3xl text-red-900 md:text-5xl" > 
                        Subscribe to Get more information about the donation
                </div>


            <form className="bg-black flex flex-col p-4 items-center lg:w-96">
                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >Email Address</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >Subject</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >Message</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >First Name</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >Surname</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >organisation</p>
                    <input className="bg-white w-60 " type="text" />
                </div>

                <div className="flex flex-col text-white  " >
                    <p className="text-xl " >phone number</p>
                    <input className="bg-white w-60 " type="text" />
                </div>
                
                <div className="text-white" >
                    information email
                    <input type="radio" />
                </div>

                <div className="text-white" >
                    Donation Request
                    <input type="radio" />
                </div>

                you can unsubscribe at any poin in time

                <button className="bg-blue-900 p-3 text-white " >Subscribe</button>

            </form>
        </div>
    )
}

export default Form