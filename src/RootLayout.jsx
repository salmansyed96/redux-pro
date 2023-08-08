
 import { Outlet } from "react-router-dom";
 import Navbar from "./components/NavBarPanel";
 import { Provider } from "react-redux";
 import store from "./store/store";




const RootLayout =()=>{
    return(
        <Provider store={store}>
       
        <Navbar />
        <main>
            <Outlet/>
        </main>
       
        </Provider>
    )
}
export default RootLayout;