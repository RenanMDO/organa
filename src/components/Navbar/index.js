import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Organa</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Soluções</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='blog'>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='store'>Loja</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Entrar Portal</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar