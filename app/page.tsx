import Image from "next/image";
import { Footer, Form, Nav1, Nav2, Nav3, Nav4 } from "./components";
import { ThemeProvider } from "@material-tailwind/react";
import Nav from "./NavBar/navbar";


export default function Home() {
  return (
    <main className=" bg-blue-50"  >
      <Nav/>
    <Nav1/>
    <Nav2/>
    <Nav3/>
    <Nav4/>
    <Form/>
    <Footer/>
    
    </main>
  );
}
