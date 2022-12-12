import React, {useState} from 'react'
import BatimentIntelligent from '../components/BatimentIntelligent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const BatIntPage = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        < BatimentIntelligent/>
        <Footer />
        </>
    )
}

export default BatIntPage
