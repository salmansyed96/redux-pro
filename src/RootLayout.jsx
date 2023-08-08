
 import { Outlet } from "react-router-dom";
 import Navbar from "./components/NavBarPanel";




const RootLayout =()=>{
    return(
        <>
        <Navbar />
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default RootLayout;