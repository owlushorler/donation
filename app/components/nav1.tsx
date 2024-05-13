"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import mp from "../images/Frame 11 (4).png"
import mm from "../images/Frame 9 (3).png"
import m1 from "../images/dae186791f35a41f702b11fe648b79b4.jpg"
import m2 from "../images/games.jpg"
import m3 from "../images/poverty-in-Nigeria-2.jpg"
import m4 from "../images/af.jpg"
import m5 from "../images/boy-burkina-faso-poverty-africa.jpg"
import m6 from "../images/images (1).jpg"
import { CarouselProps } from "@material-tailwind/react";
 
export default function  Nav1 ():any {
  type mann = {
    className:string
    navigation:any,

  }
  return (

    
    <div className="bg-black">
      <Image
      src={m1}
      alt="image 1"
      className="  h-96 w-screen  "
     // style={{height:"37vw"}}
    />
    {/*<Carousel


    className="rounded-xl  h-96 "
    navigation ={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <Image
      src={m1}
      alt="image 1"
      className="  h-96 w-screen  "
     // style={{height:"37vw"}}
    />
    <Image
      src={m2}
      alt="image 2"
      className="  h-96 w-screen "
      //style={{height:"37vw"}}
    />
    <Image
      src={m4}
      alt="image 3"
      className="  h-96 w-screen "
      //style={{height:"37vw"}}
    />
  </Carousel>*/}
  </div>
          );
}