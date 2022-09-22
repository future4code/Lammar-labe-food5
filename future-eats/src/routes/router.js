import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage, FeedPage, LoginPage, PlacesPage, ProfilePage, SignupPage } from "../pages";



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/feed/:id" element={<FeedPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/places:id" element={<PlacesPage/>}/>
                <Route path="/profile/:id" element={<ProfilePage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}