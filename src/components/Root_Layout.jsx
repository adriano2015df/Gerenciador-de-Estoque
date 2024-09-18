import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Root_Layout(){
    return(
        <>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}