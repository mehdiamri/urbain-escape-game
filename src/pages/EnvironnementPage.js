import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Environnement from '../components/Environnement'

const EnvironnementPage = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Environnement/>
        <Footer />
        </>
    )
}

export default EnvironnementPage
