import styled from 'styled-components'
import {Link} from 'react-scroll'

export const LoginButton = styled(Link)`
 border-radius: 50px; 
 background: ${({primary}) => (primary ? '#00B400' : '#00B400')};
 white-space= nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px' )};
 color: ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center; 
 transition: all 0.2s ease-in-out;

 &:hover {
     trasition: all 0.2s ease-in-out;
     background: ${({ primary }) => (primary ? '#fff' : '#Eb2227')}
 };
}
`;


