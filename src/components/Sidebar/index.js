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
          <SidebarLink to="about">
            Sobre
          </SidebarLink>
          <SidebarLink to="services">
            Soluções
          </SidebarLink>
          <SidebarLink to="/blog">
            Blog
          </SidebarLink>
          <SidebarLink to="/store">
            Loja
          </SidebarLink>
          <SidebarLink to="contact">
            Contato
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Entrar Portal</SidebarRoute>
        </SideBtnWrap>  
      </Sidebarwrapper>
    </SidebarContainer>
  )
}

export default Sidebar