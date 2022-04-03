import React from 'react'
import {SidebarContainer, Icon, CloseIcon, Sidebarwrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Sidebarwrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
            Sobre
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
            Soluções
          </SidebarLink>
          <SidebarLink to="/blog" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
            Blog
          </SidebarLink>
          <SidebarLink to="/store" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
            Loja
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
            Contato
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle} smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Entrar Portal</SidebarRoute>
        </SideBtnWrap>  
      </Sidebarwrapper>
    </SidebarContainer>
  )
}

export default Sidebar