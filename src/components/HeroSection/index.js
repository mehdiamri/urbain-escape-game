import React, {Component} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, } from './HeroElements.js'
import Hero1 from '../../images/EseoEstpBg2.png'
import "./test.css";

class HeroSection extends Component {
 
    
    componentDidMount() {
     
      }
    
    render()
    {
      
    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
              <img width ={1920}  alt="Hero" src={Hero1}/>
            </HeroBg> 
            <HeroContent>
            <HeroH1> Bienvenue sur BatGamer, une Escape Game pour ESEO-ESTP </HeroH1>
            </HeroContent>
        </HeroContainer>
        </>
    )
    }
}

export default HeroSection
