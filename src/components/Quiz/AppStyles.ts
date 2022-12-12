// Global CSS added here
import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-color : #010606;
        background-size: cover;
        margin: 0;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 50;
    padding-bottom:50px;
    > p {
        color: #fff;
    }
    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }
    h1 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 64px;
        margin-top : 200px;
        @media screen and (max-width: 480px) {
            font-size: 2rem;
        }
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        drop-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .start {
       max-width: 200px; 
    }
    .image-credits {
        position: fixed;
        bottom: 10px;
        color: white;
        a {
            color: white;
        }
    }
`