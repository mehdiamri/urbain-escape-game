import React, { Component } from "react";
import { Button } from "../../ButtonElements";
import { SectionWrap } from "./SectionsElements";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  SectionContainer,
  SectionH1,
  SectionWrapper,
  SectionCard,
  SectionIcon,
  SectionH2,
  SectionP,
} from "./SectionsElements";
import BatimentIntelligent from '../../images/BatimentIntelligent.jpg'
import ConstructeurBatiment from '../../images/ConstructeurBatiment.jpg'
import MetiersFuturs from '../../images/MetiersFuturs.png'

class SectionElements extends Component {

  state = {
    loading: true,
    Articles:[],
  };

  async componentDidMount() {
   
  }

  render() {
    const { loading } = this.state;
    const {Articles} = this.state;

    return (
      <>
        <SectionContainer id="blog">
          <SectionH1> Actualité </SectionH1>
         
            <>
              <SectionWrapper>
               
                  
                      <>
                        <SectionCard
                        onClick = {event => window.location.href='/batimentintelligent'}
                        >
                          <SectionIcon
                            src={BatimentIntelligent}
                          />
                          <SectionH2>Bâtiment Intelligent</SectionH2>
                          <SectionP>Découvrez les diffrentes fonctionnalités du bâtiment</SectionP>
                  
                        </SectionCard>
                      </>

                      <>
                        <SectionCard
                        >
                          <SectionIcon
                            src={ConstructeurBatiment}
                          />
                          <SectionH2>Consctructeurs Du Bâtiment</SectionH2>
                          <SectionP>Découvrez qui ont construit ce bâtiment</SectionP>
                       
                        </SectionCard>
                      </>

                      <>
                        <SectionCard
                        >
                          <SectionIcon
                            src={MetiersFuturs}
                          />
                          <SectionH2>Formation Du Futur</SectionH2>
                          <SectionP>Comment devenir un ?</SectionP>
                    
                        </SectionCard>
                      </>

              </SectionWrapper>

              <br />
              <center>
                <SectionWrap>
                  <Button
                    onClick={(event) => (window.location.href = "/blog")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={true}
                    dark={true}
                    dark2={true}
                  >
                    Afficher toutes les sections
                  </Button>
                </SectionWrap>
              </center>
            </>
         
        </SectionContainer>
      </>
    );
  }
}

export default SectionElements;
