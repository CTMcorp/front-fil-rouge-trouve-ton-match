import './App.scss'
import Home from "./components/pages/home/Home.jsx";
import Login from "./components/connection/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Register from "./components/connection/Register.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
