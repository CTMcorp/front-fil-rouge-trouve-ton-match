import {useState} from 'react'
import './App.scss'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <Header></Header>
            <main>
                {/*<Home></Home>*/}
                <Login></Login>
            </main>
            <Footer></Footer>
        </>
    )
}

export default App
