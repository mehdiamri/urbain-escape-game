import styled from "styled-components";

export const EnvironnementContainer = styled.div`
padding-top : 150px;
padding-bottom : 150px;
height: auto; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: auto;
}

@media screen and (max-width: 480px) {
    height: auto;
}

`;

export const EnvironnementWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
margin-left : 20%;
margin-right : 29%;

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    margin-left : 24%;
    margin-right : 24%;
}
}

@media screen and (max-width : 768px) {
    grid-template-columns: 1fr;
    padding: 0px;
    margin-left : 24%;
    margin-right : 24%;
}
`;

export const EnvironnementCard = styled.div`
background: #fff;
display: flex; 
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const EnvironnementIcon = styled.img`
height : 340px;
width: 340px;
margin-bottom: 10px;
margin-top: -30px;
margin-left: -30px ;
margin-right: -30px;
border-radius: 10px;
align-items: center;
`;

export const EnvironnementH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const EnvironnementH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const EnvironnementP = styled.p`
font-size: 1rem;
text-align: center;
`;

export const EnvironnementCardBig = styled.div`
background: #fff;
display: flex; 
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 450px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;