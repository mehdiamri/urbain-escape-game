import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements'
import { LoginButton } from '../Buttons/LoginButton'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Acceuil</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>A propos</SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>Section</SidebarLink>
                    <SidebarLink to="sponsors" onClick={toggle}>Sponsors</SidebarLink>
                    <SidebarLink to="evenements" onClick={toggle}>Evenements</SidebarLink>
                    <LoginButton
                
                    onClick={(event) => (window.location.href = "/about")}
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
                </SidebarMenu> 
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
