import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import Logo from '../../images/logoBatGamer.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Carmen</FooterLinkTitle>
                                <FooterLink to="/emissions">Nos emissions</FooterLink>
                                <FooterLink to="/blog">Blog</FooterLink>
                                <FooterLink to="/about">Careers</FooterLink>
                                <FooterLink to="/sponsors">Investors</FooterLink>
                                <FooterLink to="/evenements">Evenements</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Emissions</FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}><img alt="Carmen" width="80px" height="80px" src={Logo}/></SocialLogo>
                        <WebsiteRights>BatGamer © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/Radiocarmentn" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/radio_carmen/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCasJ3ihR4dntwndFOheRbjA" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                           
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
