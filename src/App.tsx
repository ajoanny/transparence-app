import './App.css'
import {Routes, Route} from "react-router-dom";
import About from "./pages/about/about.tsx";
import Cases from "./pages/cases/cases.tsx";
import Header from "./components/header/header.tsx";
import Notification from "./components/notification/notification.tsx";

function App() {
    return (
        <>
            <Header/>
            <Notification/>
            <main>
                <Routes>
                    <Route path="/" element={<Cases />} />
                    <Route path="/a-propos" element={<About />} />
                </Routes>
            </main>
        </>
    )
}


export default App
