import {useState} from 'react'
import './App.scss'
import Header from "./components/organics/header/Header.jsx";
import Footer from "./components/organics/footer/Footer.jsx"
import Home from "./components/pages/home/Home.jsx";
import Login from "./components/connection/Login.jsx";
import Register from "./components/connection/Register.jsx";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <Header></Header>
            <main>
                {/*<Home></Home>*/}
                {/*<Login></Login>*/}
                <Register></Register>
            </main>
            <Footer></Footer>
        </>
    )
}

export default App
