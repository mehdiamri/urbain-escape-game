import React, { Component } from "react";
import {
  BatimentIntelligentContainer,
  BatimentIntelligentCardBig,
  BatimentIntelligentIcon,
  BatimentIntelligentH2,
  BatimentIntelligentH1,
  BatimentIntelligentCard,
  BatimentIntelligentP,
  BatimentIntelligentWrapper,
} from "./BatimenetIntelligent";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import moment from "moment";
import "moment/locale/fr";
import Energie from '../../images/energie.jpg'
import Environnement from '../../images/environnement.jpg'
import IOT from '../../images/iot.jpg'
import SmartBuilding from '../../images/smartbuilding.jpg'
class BatimentIntelligent extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <BatimentIntelligentContainer id="blog">
        <>
          <BatimentIntelligentH1>Bâtiment Intelligent</BatimentIntelligentH1>

          <BatimentIntelligentCardBig>
            <BatimentIntelligentIcon src={SmartBuilding} />
            <BatimentIntelligentH2>Titre</BatimentIntelligentH2>
            <BatimentIntelligentP>Article</BatimentIntelligentP>
            <br />
            <BatimentIntelligentP>Titre</BatimentIntelligentP>
          </BatimentIntelligentCardBig>

          <br />
          <br />
          <br />
          <BatimentIntelligentH1>
            Les différents sections
          </BatimentIntelligentH1>
          <BatimentIntelligentWrapper>
            <>
              <BatimentIntelligentCard onClick = {event => window.location.href='/batimentintelligentquiz'}>
                <BatimentIntelligentIcon src={Energie}/>
                <BatimentIntelligentH2>Energie</BatimentIntelligentH2>
                <BatimentIntelligentP>Apprendre encore plus sur la façade intelligente, l'utilisation des panneaux ...</BatimentIntelligentP>

             
              </BatimentIntelligentCard>
            </>

            <>
              <BatimentIntelligentCard>
                <BatimentIntelligentIcon src = {Environnement}/>
                <BatimentIntelligentH2>Environnement</BatimentIntelligentH2>
                <BatimentIntelligentP>Comment ce bâtiment est éco conçu ...?</BatimentIntelligentP>

             
              </BatimentIntelligentCard>
            </>

            <>
              <BatimentIntelligentCard>
                <BatimentIntelligentIcon src = {IOT}/>
                <BatimentIntelligentH2>IOT</BatimentIntelligentH2>
                <BatimentIntelligentP>Bâtiment communiquant et connecté.</BatimentIntelligentP>

                
              </BatimentIntelligentCard>
            </>
          </BatimentIntelligentWrapper>
        </>
      </BatimentIntelligentContainer>
    );
  }
}

export default BatimentIntelligent;
