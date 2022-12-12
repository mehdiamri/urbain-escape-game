import React, { Component } from "react";
import {
  EnvironnementContainer,

  EnvironnementH1,

} from "./EnvironnementElements";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import moment from "moment";
import "moment/locale/fr";




class Environnement extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <EnvironnementContainer id="environnement">
        <>
          <EnvironnementH1>Environnement</EnvironnementH1>

    
          <EnvironnementH1>
            Regarder cette vidéo et obtenez vos points
          </EnvironnementH1>
         
        </>
      </EnvironnementContainer>
    );
  }
}

export default Environnement;
