
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Regsiter from "../pages/Register/Regsiter"


const CustomRouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Regsiter />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRouteProvider