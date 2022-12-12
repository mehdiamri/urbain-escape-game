import styled from "styled-components";

export const SectionContainer = styled.div`
height: 800px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media screen and (max-width: 1200px) {
    height: 1300px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`;

export const SectionWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

display: flex;
justify-content: center;



@media screen and (max-width: 1200px) {
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    margin-left : 24%;
    margin-right : 24%;
}

@media screen and (max-width : 768px) {
    display : grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin-left : 24%;
    margin-right : 24%;

}
`;

export const SectionCard = styled.div`
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

export const SectionIcon = styled.img`
height : 340px;
width: 340px;
margin-bottom: 10px;
margin-top: -30px;
margin-left: -30px ;
margin-right: -30px;
border-radius: 10px;
align-items: center;
`;

export const SectionH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const SectionH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const SectionP = styled.p`
font-size: 1rem;
text-align: center;
`;

export const SectionWrap = styled.div`
display: flex;
justify-content: flex-start;
`;