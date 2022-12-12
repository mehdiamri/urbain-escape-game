import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/logoBatGamer.png'
import {LoginButton } from '../Buttons/LoginButton';
import Login from '../Login';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    console.log(openModal)

    return (
       <>
       <IconContext.Provider value={{ color: '#fff'}}>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome} ><img alt="BatGamer" width="80px" height="80px" src={Logo}/></NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="/" smooth={true} duration={500} spy={true}
                       exact='true' offset={-80}
                       >Acceuil</NavLinks>
                   </NavItem>
                   
                   <NavItem>
                       <NavLinks to="about" smooth={true} duration={500} spy={true}
                       exact='true' offset={-80}
                       >A propos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="blog" smooth={true} duration={500} spy={true}
                       exact='true' offset={-80}
                       >Sections</NavLinks>
                   </NavItem>
                
                   <NavItem>
                       <NavLinks to="sponsors" smooth={true} duration={500} spy={true}
                       exact='true' offset={-80}
                       >Sponsors</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="evenements" smooth={true} duration={500} spy={true}
                       exact='true' offset={-80}
                       >Evenements</NavLinks>
                   </NavItem>


                   <LoginButton
                   onClick={()=>{setOpenModal(!openModal)}}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={true}
                    dark={true}
                    dark2={true}                    
                    >
                        Login
                    </LoginButton> 
                   
                   <Login openModal={openModal}/>
                
               </NavMenu>
               <NavBtn>
               </NavBtn>
             </NavbarContainer>
         </Nav>
         </IconContext.Provider>
       </>
    )
}

export default Navbar;
