import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import App from '../components/Quiz/App'
import ScratchCardCostum from '../components/ScratchCard'
import Footer from '../components/Footer'
const BatIntQuiz = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        < App/>
        <Footer />
        </>
    )
}

export default BatIntQuiz
