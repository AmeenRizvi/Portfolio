import React from 'react'
import {Link as LinkR} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme  } from '../../utils/Themes';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
// import Hero from "./components/HeroSection";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
import { BrowserRouter as Router} from 'react-router-dom';

const Nav = styled.div`
  background-color : ${({theme}) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content : center;
  align-items : center;
  font-size : 1rem;
  position : sticky;
  top : 0;
  z-index : 10;
  @media screen and (max-width: 960px){
    transition : 0.8s all ease;
  }
`;


const NavContainer = styled.div`
  display: flex;
  justify-content : space-between;
  height : 60px;
  z-index : 1;
  width : 100%;
  padding : 0 24px;
  max-width: 1200px
`;

const NavLogo = styled(LinkR)`
  width : 80%;
  padding : 0 6px;
  display : flex;
  justify-self : flex-start;
  cursor : pointer;
  text-decoration :none;
  align-items : center;
  @media screen and (max-width : 640px){
    padding : 0 0px;

  }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const MobileIcon = styled.div` 
display : None;
@media screen and {max-width: 760px}{
  display : block;
  position : absolute;
  top : 0;
  right : 0;
  transform: translate(-100%, 50%);
  font-size : 1.8rem;
  cursor : pointer;
  color : ${({theme}) => theme.text_primary};
}
`;

export const GitHubButton = styled.a`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavItems = styled.div`
width : 100%;
display: flex;
justify-content : center;
align-items : center;
gap : 32px;
list-style : none;

@media screen and {max-width: 760px}{
  display : none;
}
`;


export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1' : '-1')};

`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
padding: 0 4px;
font-weigth : bold;
font-size : 18px;
`;




const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Router>
    <Nav>
    <NavContainer>
    <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
      <MobileIcon>
        <FaBars 
          onClick={()=>{
            setIsOpen(!isOpen);
          }}
        />
      </MobileIcon>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        
        <NavLink href="#project">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </NavItems>
      <ButtonContainer>
        <GitHubButton>Github Profile</GitHubButton>
      </ButtonContainer>
    </NavContainer>
    {
      isOpen && (
        <MobileIcon isOpen={isOpen}>

        </MobileIcon>
      )
    }

    </Nav>
    </Router>
  )
};

export default Navbar;