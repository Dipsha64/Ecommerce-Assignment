import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home";
import Shop from "../pages/Shop/Shop";

function Router(){
    return (
        <>
        {/* <BrowserRouter> */}
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        {/* </BrowserRouter> */}
        </>
    );
}

export default Router;
