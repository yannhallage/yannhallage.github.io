import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "../pages/blog";
import Mains from "../pages/mains";


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Mains />}/>
                        <Route path="/blog" element={<Blog />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;