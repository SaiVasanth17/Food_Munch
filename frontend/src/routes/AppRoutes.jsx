import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import Menu from "../pages/Menu/Menu";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/menu" element={<Menu />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="/wishlist" element={<Wishlist />} />

                    <Route path="/profile" element={<Profile />} />

                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;